# -*- coding: utf-8 -*-
"""Builds virtual-audio-cable-i18n.js — translates plain fragments, then applies code / emphasis."""
import json
import re
import time

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("pip install deep_translator")
    raise

LANGS_JS = r'''const LANGS = [
    {code:"EN",name:"English",native:"English",flag:"linear-gradient(to bottom,#012169 0%,#012169 33%,#fff 33%,#fff 50%,#C8102E 50%)"},
    {code:"JA",name:"Japanese",native:"日本語",flag:"radial-gradient(circle at 45% 50%,#BC002D 22%,#fff 22%)"},
    {code:"KO",name:"Korean",native:"한국어",flag:"linear-gradient(to bottom,#fff 30%,#CD2E3A 30%,#CD2E3A 70%,#0047A0 70%)"},
    {code:"ZH",name:"Chinese",native:"简体中文",flag:"linear-gradient(135deg,#DE2910 0%,#DE2910 100%)"},
    {code:"ZH-TW",name:"Chinese (TW)",native:"繁體中文",flag:"linear-gradient(to bottom,#FE0000 40%,#000095 40%)"},
    {code:"ZH-HK",name:"Chinese (HK)",native:"粵語",flag:"linear-gradient(135deg,#DE2910 0%,#DE2910 100%)"},
    {code:"ES",name:"Spanish",native:"Español",flag:"linear-gradient(to bottom,#AA151B 0%,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%)"},
    {code:"FR",name:"French",native:"Français",flag:"linear-gradient(to right,#002395 0%,#002395 33%,#fff 33%,#fff 66%,#ED2939 66%)"},
    {code:"DE",name:"German",native:"Deutsch",flag:"linear-gradient(to bottom,#000 0%,#000 33%,#D00 33%,#D00 66%,#FFCE00 66%)"},
    {code:"IT",name:"Italian",native:"Italiano",flag:"linear-gradient(to right,#009246 0%,#009246 33%,#fff 33%,#fff 66%,#CE2B37 66%)"},
    {code:"PT",name:"Portuguese",native:"Português",flag:"linear-gradient(to right,#006600 0%,#006600 40%,#FF0000 40%)"},
    {code:"PT-BR",name:"Portuguese (BR)",native:"Português BR",flag:"linear-gradient(135deg,#009739 0%,#009739 100%)"},
    {code:"RU",name:"Russian",native:"Русский",flag:"linear-gradient(to bottom,#fff 0%,#fff 33%,#0039A6 33%,#0039A6 66%,#D52B1E 66%)"},
    {code:"UK",name:"Ukrainian",native:"Українська",flag:"linear-gradient(to bottom,#005BBB 0%,#005BBB 50%,#FFD500 50%)"},
    {code:"PL",name:"Polish",native:"Polski",flag:"linear-gradient(to bottom,#fff 0%,#fff 50%,#DC143C 50%)"},
    {code:"NL",name:"Dutch",native:"Nederlands",flag:"linear-gradient(to bottom,#AE1C28 0%,#AE1C28 33%,#fff 33%,#fff 66%,#21468B 66%)"},
    {code:"SV",name:"Swedish",native:"Svenska",flag:"linear-gradient(to bottom,#006AA7 0%,#006AA7 40%,#FECC00 40%,#FECC00 60%,#006AA7 60%)"},
    {code:"DA",name:"Danish",native:"Dansk",flag:"linear-gradient(to bottom,#C8102E 0%,#C8102E 40%,#fff 40%,#fff 60%,#C8102E 60%)"},
    {code:"NO",name:"Norwegian",native:"Norsk",flag:"linear-gradient(to bottom,#EF2B2D 0%,#EF2B2D 35%,#002868 35%,#002868 65%,#EF2B2D 65%)"},
    {code:"FI",name:"Finnish",native:"Suomi",flag:"linear-gradient(to bottom,#fff 0%,#fff 38%,#003580 38%,#003580 62%,#fff 62%)"},
    {code:"CS",name:"Czech",native:"Čeština",flag:"linear-gradient(to bottom,#fff 0%,#fff 50%,#D7141A 50%)"},
    {code:"SK",name:"Slovak",native:"Slovenčina",flag:"linear-gradient(to bottom,#fff 0%,#fff 33%,#0B4EA2 33%,#0B4EA2 66%,#EE1C25 66%)"},
    {code:"RO",name:"Romanian",native:"Română",flag:"linear-gradient(to right,#002B7F 0%,#002B7F 33%,#FCD116 33%,#FCD116 66%,#CE1126 66%)"},
    {code:"HU",name:"Hungarian",native:"Magyar",flag:"linear-gradient(to bottom,#CE2939 0%,#CE2939 33%,#fff 33%,#fff 66%,#477050 66%)"},
    {code:"EL",name:"Greek",native:"Ελληνικά",flag:"linear-gradient(to bottom,#0D5EAF 0%,#0D5EAF 55%,#fff 55%,#fff 66%,#0D5EAF 66%)"},
    {code:"TR",name:"Turkish",native:"Türkçe",flag:"linear-gradient(135deg,#E30A17 0%,#E30A17 100%)"},
    {code:"AR",name:"Arabic",native:"العربية",flag:"linear-gradient(to bottom,#007A3D 0%,#007A3D 33%,#fff 33%,#fff 66%,#000 66%)"},
    {code:"VI",name:"Vietnamese",native:"Tiếng Việt",flag:"linear-gradient(135deg,#DA251D 0%,#DA251D 100%)"}
];'''

LANG_MAP = {
    "EN": "en",
    "JA": "ja",
    "KO": "ko",
    "ZH": "zh-CN",
    "ES": "es",
    "FR": "fr",
    "DE": "de",
    "IT": "it",
    "PT": "pt",
    "RU": "ru",
    "UK": "uk",
    "PL": "pl",
    "NL": "nl",
    "SV": "sv",
    "DA": "da",
    "NO": "no",
    "FI": "fi",
    "CS": "cs",
    "SK": "sk",
    "RO": "ro",
    "HU": "hu",
    "EL": "el",
    "TR": "tr",
    "AR": "ar",
    "VI": "vi",
}

CODE_STYLE = (
    "background:rgba(0,212,255,0.1);color:var(--cyan);padding:0.12rem 0.4rem;"
    "border-radius:4px;font-size:0.9em"
)

# Plain English fragments (no HTML). Technical tokens kept ASCII for codeify().
EN_FRAG = {
    "doc_title": "Virtual Audio Cable Setup — S2S Portable",
    "meta_desc": "How S2S Portable auto-detects VB-Audio cables, runs the cable test, opens Windows Sound settings, and what to set in Quest, VRChat, and Windows.",
    "nav_dl": "Download & setup",
    "nav_manual": "Manual",
    "h1_pre": "Virtual Audio Cable ",
    "h1_em": "Setup Help",
    "lead": "How S2S Portable detects VB-Audio devices, runs the cable test, updates config.ini, and what you still set manually in Quest, VRChat, and Windows.",
    "toc_title": "On this page",
    "toc_flow": "Recommended flow",
    "toc_startup": "Startup auto-configuration",
    "toc_launch": "First launch vs returning",
    "toc_sound": "Open Windows Sound & helper module",
    "toc_summary": "Setup summary (Quest / VRChat / Windows)",
    "toc_vrchat": "VRChat (in-game only)",
    "toc_persist": "Optional: make devices stick",
    "toc_config": "Turn off auto cable test",
    "h2_flow": "Recommended flow",
    "li_flow1a": "Install ",
    "li_flow1b": " from ",
    "li_flow1c": " and reboot if prompted.",
    "vb_cable_name": "VB-Audio Virtual Cable",
    "li_flow2": "In S2S Portable, run Audio Wizard or Test & Connect Audio Cables (Audio tab).",
    "li_flow3": "The app applies detected devices to the GUI and writes results to config.ini.",
    "li_flow4": "When the setup summary appears, use Open Windows Sound if you need to set Windows default input/output quickly.",
    "li_flow5": "Configure Quest, VRChat, and Windows as shown in the summary (device names match what the wizard found on your PC).",
    "h2_startup": "Startup auto-configuration",
    "p_startup1": "About 2 seconds after the app loads, if the virtual cable is still missing (internal virtual_id = -1) and auto cable configuration is enabled (default: on), S2S runs the cable test in the background.",
    "p_startup2": "It looks for your microphone, headphones, virtual cable, and incoming (game) audio, then:",
    "li_su1": "Writes the results to config.ini",
    "li_su2": "Refreshes the Audio tab dropdowns so they match",
    "h2_launch": "First launch vs returning",
    "li_la1": "First launch: the language wizard runs at ~800 ms.",
    "li_la2": "Returning launch: at ~2000 ms, if the virtual cable is still not detected, the cable test runs automatically (when auto-config is on).",
    "p_la1": "Whether the test runs from startup or from the wizard, the outcome is the same: config.ini + GUI stay in sync.",
    "h2_sound": "Open Windows Sound & _windows_audio.py",
    "p_sound1": "After the cable test, the setup summary includes an Open Windows Sound button. It opens Windows Sound settings (ms-settings:sound) so you can set default recording and playback devices without leaving S2S.",
    "p_sound2": "The portable build includes a small helper, _windows_audio.py:",
    "li_so1_tail": "opens the Windows Sound page.",
    "li_so2_tail": "optional; can set defaults programmatically if pycaw is installed.",
    "h2_summary": "Setup summary popup (example routing)",
    "p_sum1": "After the wizard finishes, the popup lists where to point each system. Labels use the real device names detected on your machine; the table below shows the usual pattern for two VB cables (A/B):",
    "th_where": "Where",
    "th_what": "What to set",
    "tr_q_title": "Quest (Microphone)",
    "tr_q_cell_pre": "Microphone",
    "cable_a": "CABLE Output (VB-Audio Cable A)",
    "cable_b": "CABLE Input (VB-Audio Cable B)",
    "tr_vc_title": "VRChat (in-game)",
    "tr_vc_in": "Input (Microphone)",
    "tr_vc_out": "Output",
    "tr_vc_mid": " for bidirectional, ",
    "tr_vc_or": "or",
    "tr_vc_tail": " your headphones for listen-only setups.",
    "tr_win_title": "Windows Sound (mixer)",
    "tr_win_in": "Input (Recording)",
    "tr_win_out": "Output (Playback)",
    "tr_win_in_tail": " your physical microphone",
    "tr_win_out_tail": " your headphones",
    "arrow": "→",
    "h2_vrc_title": "VRChat cannot be set by the app",
    "notice_h": "Manual step",
    "notice_p": "S2S does not change VRChat's microphone or speaker for you. You choose those inside VRChat's settings. The setup summary tells you which device name to pick so it matches the cable test.",
    "h2_persist": "Optional: permanent device selection",
    "p_persist": "To make the correct endpoints stick across reboots, run the Audio Wizard in the Audio tab with your Quest headset on and connected, then save. That updates config.ini with the proper device IDs for your rig.",
    "h2_config": "Disable startup auto cable test",
    "p_config1": "If you prefer to run the cable test only by hand, edit config.ini:",
    "p_config2_pre": "Default is ",
    "p_config2_true": "true",
    "p_config2_post": " so new installs get help automatically.",
    "also_see_pre": "Also see ",
    "also_link_dl": "Download page — VB-Audio prerequisites",
    "also_mid": " and ",
    "also_link_man": "Manual §7 (VRChat & apps)",
    "also_see_post": ".",
    "footer_home": "Home",
    "footer_download": "Download",
    "footer_manual": "Manual",
    "footer_disc": "S2S Portable — not affiliated with VRChat Inc. or VB-Audio.",
}

# Keep Windows/device literals and config keywords in English for all locales
NO_TRANSLATE_KEYS = frozenset(
    {"p_config2_true", "arrow", "vb_cable_name", "cable_a", "cable_b"}
)


def tr(txt: str, dest: str) -> str:
    if dest == "en":
        return txt
    try:
        r = GoogleTranslator(source="en", target=dest).translate(txt)
        return r if r else txt
    except Exception:
        return txt


def code_wrap(s: str, tok: str) -> str:
    h = f'<code style="{CODE_STYLE}">{tok}</code>'
    return s.replace(tok, h)


def codeify_paragraph(s: str) -> str:
    s = code_wrap(s, "virtual_id = -1")
    s = code_wrap(s, "ms-settings:sound")
    s = code_wrap(s, "_windows_audio.py")
    s = code_wrap(s, "config.ini")
    s = code_wrap(s, "[AUDIO]")
    s = code_wrap(s, "auto_configure_cables = false")
    return s


def bold_brands(s: str) -> str:
    # Avoid wrapping "Windows" inside "Open Windows Sound"
    prot = []
    if "Open Windows Sound" in s:
        ph = "\ue000OWS\ue001"
        s = s.replace("Open Windows Sound", ph)
        prot.append((ph, "<strong>Open Windows Sound</strong>"))
    for name in ("S2S Portable", "VRChat", "Quest", "Windows"):
        s = re.sub(r"\b" + re.escape(name) + r"\b", "<strong>" + name + "</strong>", s)
    for token, repl in prot:
        s = s.replace(token, repl)
    return s


def compose_ui(f):
    cyan = "var(--cyan)"
    u = {}

    u["doc_title"] = f["doc_title"]
    u["meta_desc"] = f["meta_desc"]
    u["nav_dl"] = f["nav_dl"]
    u["nav_manual"] = f["nav_manual"]
    u["h1_title"] = f["h1_pre"] + '<em style="color:var(--cyan)">' + f["h1_em"] + "</em>"
    u["lead"] = bold_brands(codeify_paragraph(f["lead"]))

    u["toc_title"] = f["toc_title"]
    for k in (
        "toc_flow",
        "toc_startup",
        "toc_launch",
        "toc_sound",
        "toc_summary",
        "toc_vrchat",
        "toc_persist",
        "toc_config",
    ):
        u[k] = f[k]

    u["h2_flow"] = f["h2_flow"]
    u["li_flow1"] = (
        f["li_flow1a"]
        + "<strong>"
        + f["vb_cable_name"]
        + "</strong>"
        + f["li_flow1b"]
        + f'<a href="https://vb-audio.com/Cable/" style="color:{cyan};">vb-audio.com/Cable</a>'
        + f["li_flow1c"]
    )
    u["li_flow2"] = bold_brands(f["li_flow2"])
    u["li_flow3"] = bold_brands(codeify_paragraph(f["li_flow3"]))
    u["li_flow4"] = bold_brands(codeify_paragraph(f["li_flow4"]))
    u["li_flow5"] = bold_brands(f["li_flow5"])

    u["h2_startup"] = f["h2_startup"]
    u["p_startup1"] = bold_brands(codeify_paragraph(f["p_startup1"]))
    u["p_startup2"] = f["p_startup2"]
    u["li_su1"] = codeify_paragraph(f["li_su1"])
    u["li_su2"] = f["li_su2"]

    u["h2_launch"] = f["h2_launch"]
    u["li_la1"] = f["li_la1"]
    u["li_la2"] = f["li_la2"]
    u["p_la1"] = codeify_paragraph(f["p_la1"])

    u["h2_sound"] = codeify_paragraph(f["h2_sound"])
    u["p_sound1"] = bold_brands(codeify_paragraph(f["p_sound1"]))
    u["p_sound2"] = codeify_paragraph(f["p_sound2"])
    u["li_so1"] = (
        f'<code style="{CODE_STYLE}">open_windows_sound_settings()</code> — ' + f["li_so1_tail"]
    )
    u["li_so2"] = (
        f'<code style="{CODE_STYLE}">set_default_devices(mic_name, speaker_name)</code> — '
        + f["li_so2_tail"]
    )

    u["h2_summary"] = f["h2_summary"]
    u["p_sum1"] = f["p_sum1"]
    u["th_where"] = f["th_where"]
    u["th_what"] = f["th_what"]
    u["tr_q_title"] = "<strong>" + f["tr_q_title"] + "</strong>"
    u["tr_q_cell"] = (
        f["tr_q_cell_pre"] + " " + f["arrow"] + " " + f'<code style="{CODE_STYLE}">' + f["cable_a"] + "</code>"
    )
    u["tr_vc_title"] = "<strong>" + f["tr_vc_title"] + "</strong>"
    u["tr_vc_cell"] = (
        "<strong>"
        + f["tr_vc_in"]
        + "</strong> "
        + f["arrow"]
        + f' <code style="{CODE_STYLE}">'
        + f["cable_a"]
        + f'</code><br><br><strong>'
        + f["tr_vc_out"]
        + "</strong> "
        + f["arrow"]
        + f' <code style="{CODE_STYLE}">'
        + f["cable_b"]
        + "</code>"
        + f["tr_vc_mid"]
        + "<em>"
        + f["tr_vc_or"]
        + "</em>"
        + f["tr_vc_tail"]
    )
    u["tr_win_title"] = "<strong>" + f["tr_win_title"] + "</strong>"
    u["tr_win_cell"] = (
        "<strong>"
        + f["tr_win_in"]
        + "</strong> "
        + f["arrow"]
        + f["tr_win_in_tail"]
        + "<br><br><strong>"
        + f["tr_win_out"]
        + "</strong> "
        + f["arrow"]
        + f["tr_win_out_tail"]
    )

    u["h2_vrc_title"] = f["h2_vrc_title"]
    u["notice_h"] = f["notice_h"]
    u["notice_p"] = f["notice_p"]

    u["h2_persist"] = f["h2_persist"]
    u["p_persist"] = bold_brands(codeify_paragraph(f["p_persist"]))

    u["h2_config"] = f["h2_config"]
    u["p_config1"] = codeify_paragraph(f["p_config1"])
    u["info_config"] = (
        f'<p style="margin:0;"><code style="{CODE_STYLE}">[AUDIO]</code><br>'
        f'<code style="{CODE_STYLE}">auto_configure_cables = false</code></p>'
    )
    u["p_config2"] = (
        f["p_config2_pre"]
        + f'<code style="{CODE_STYLE}">' + f["p_config2_true"] + "</code>"
        + f["p_config2_post"]
    )

    u["also_see"] = (
        f["also_see_pre"]
        + f'<a href="S2S_Portable_Download.html#setup" style="color:{cyan};">'
        + f["also_link_dl"]
        + "</a>"
        + f["also_mid"]
        + f'<a href="S2S_Portable_Manual.html#apps" style="color:{cyan};">'
        + f["also_link_man"]
        + "</a>"
        + f["also_see_post"]
    )

    u["footer_home"] = f["footer_home"]
    u["footer_download"] = f["footer_download"]
    u["footer_manual"] = f["footer_manual"]
    u["footer_disc"] = f["footer_disc"]

    return u


def esc_js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


CACHE_PATH = "virtual-audio-cable-frags-cache.json"


def load_frag_cache():
    try:
        with open(CACHE_PATH, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def save_frag_cache(cache):
    with open(CACHE_PATH, "w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)


def main():
    frag_cache = load_frag_cache()
    translated = {}
    for code, gl in LANG_MAP.items():
        print(code, flush=True)
        if code not in frag_cache:
            frag_cache[code] = {}
        frag = frag_cache[code]
        for k, v in EN_FRAG.items():
            if k in NO_TRANSLATE_KEYS:
                frag[k] = v
                continue
            if frag.get(k):
                continue
            try:
                frag[k] = tr(v, gl) or v
            except Exception as e:
                print(f"  {k}: {e}", flush=True)
                frag[k] = v
            time.sleep(0.04)
            save_frag_cache(frag_cache)
        translated[code] = compose_ui(frag)
        time.sleep(0.08)

    lines = [LANGS_JS, "", "const I18N = {"]
    first = True
    for code in LANG_MAP:
        if not first:
            lines.append(",")
        first = False
        lines.append(f"  {code}: {{")
        ui = translated[code]
        keys = list(ui.keys())
        for i, k in enumerate(keys):
            comma = "," if i < len(keys) - 1 else ""
            lines.append(f"    {k}: {esc_js_str(ui[k])}{comma}")
        lines.append("  }")
    lines.append("};")
    lines.append('I18N["ZH-TW"] = I18N.ZH; I18N["ZH-HK"] = I18N.ZH; I18N["PT-BR"] = I18N.PT;')
    lines.append("")
    lines.append("function vbacBuildDropdown(){")
    lines.append("  const d=document.getElementById('langDrop');")
    lines.append("  if(!d) return;")
    lines.append("  d.innerHTML='';")
    lines.append("  LANGS.forEach(l=>{")
    lines.append(
        "    d.innerHTML+=`<div class=\\\"lang-option\\\" role=\\\"option\\\" tabindex=\\\"0\\\" onclick=\\\"vbacSwitchLang('${l.code}')\\\"><span class=\\\"mini-flag\\\" style=\\\"background:${l.flag}\\\"></span>${l.name} <span style=\\\"color:#888;margin-left:auto\\\">${l.native}</span></div>`;"
    )
    lines.append("  });")
    lines.append("}")
    lines.append("")
    lines.append("function vbacSwitchLang(code){")
    lines.append("  const t = I18N[code] || I18N[code.substring(0,2)] || I18N.EN;")
    lines.append("  document.querySelectorAll('[data-i18n]').forEach(el=>{")
    lines.append("    const k = el.getAttribute('data-i18n');")
    lines.append("    if(t[k]) el.innerHTML = t[k];")
    lines.append("  });")
    lines.append("  const meta = document.querySelector('meta[name=description]');")
    lines.append("  if(meta && t.meta_desc) meta.setAttribute('content', t.meta_desc);")
    lines.append("  if(t.doc_title) document.title = t.doc_title;")
    lines.append(
        "  document.documentElement.lang = (code==='EN'?'en':code==='JA'?'ja':code==='KO'?'ko':code==='ZH'||code==='ZH-TW'||code==='ZH-HK'?'zh':code==='PT-BR'?'pt-BR':code.toLowerCase().replace('_','-'));"
    )
    lines.append("  document.documentElement.dir = (code==='AR') ? 'rtl' : 'ltr';")
    lines.append("  const lang = LANGS.find(l=>l.code===code);")
    lines.append("  const btn = document.getElementById('langSwitcherBtn');")
    lines.append(
        "  if(lang && btn) btn.innerHTML=`<span class=\\\"mini-flag\\\" style=\\\"background:${lang.flag}\\\"></span>${code} &#9662;`;"
    )
    lines.append("  const drop = document.getElementById('langDrop');")
    lines.append("  if(drop) drop.classList.remove('open');")
    lines.append("}")
    lines.append("")
    lines.append(
        "document.addEventListener('click',e=>{"
        "const drop=document.getElementById('langDrop');"
        "if(drop && !e.target.closest('.lang-switcher')) drop.classList.remove('open');"
        "});"
    )
    lines.append(
        "if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{ vbacBuildDropdown(); });"
        "else { vbacBuildDropdown(); }"
    )

    out_path = "virtual-audio-cable-i18n.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print("Wrote", out_path)


def emit_js_from_cache():
    """Write virtual-audio-cable-i18n.js using cached fragments; missing locales fall back to EN text."""
    frag_cache = load_frag_cache()
    translated = {}
    for code in LANG_MAP:
        frag = {**EN_FRAG}
        frag.update(frag_cache.get(code, {}))
        for k in NO_TRANSLATE_KEYS:
            frag[k] = EN_FRAG[k]
        translated[code] = compose_ui(frag)

    lines = [LANGS_JS, "", "const I18N = {"]
    first = True
    for code in LANG_MAP:
        if not first:
            lines.append(",")
        first = False
        lines.append(f"  {code}: {{")
        ui = translated[code]
        keys = list(ui.keys())
        for i, k in enumerate(keys):
            comma = "," if i < len(keys) - 1 else ""
            lines.append(f"    {k}: {esc_js_str(ui[k])}{comma}")
        lines.append("  }")
    lines.append("};")
    lines.append('I18N["ZH-TW"] = I18N.ZH; I18N["ZH-HK"] = I18N.ZH; I18N["PT-BR"] = I18N.PT;')
    lines.append("")
    lines.append("function vbacBuildDropdown(){")
    lines.append("  const d=document.getElementById('langDrop');")
    lines.append("  if(!d) return;")
    lines.append("  d.innerHTML='';")
    lines.append("  LANGS.forEach(l=>{")
    lines.append(
        "    d.innerHTML+=`<div class=\\\"lang-option\\\" role=\\\"option\\\" tabindex=\\\"0\\\" onclick=\\\"vbacSwitchLang('${l.code}')\\\"><span class=\\\"mini-flag\\\" style=\\\"background:${l.flag}\\\"></span>${l.name} <span style=\\\"color:#888;margin-left:auto\\\">${l.native}</span></div>`;"
    )
    lines.append("  });")
    lines.append("}")
    lines.append("")
    lines.append("function vbacSwitchLang(code){")
    lines.append("  const t = I18N[code] || I18N[code.substring(0,2)] || I18N.EN;")
    lines.append("  document.querySelectorAll('[data-i18n]').forEach(el=>{")
    lines.append("    const k = el.getAttribute('data-i18n');")
    lines.append("    if(t[k]) el.innerHTML = t[k];")
    lines.append("  });")
    lines.append("  const meta = document.querySelector('meta[name=description]');")
    lines.append("  if(meta && t.meta_desc) meta.setAttribute('content', t.meta_desc);")
    lines.append("  if(t.doc_title) document.title = t.doc_title;")
    lines.append(
        "  document.documentElement.lang = (code==='EN'?'en':code==='JA'?'ja':code==='KO'?'ko':code==='ZH'||code==='ZH-TW'||code==='ZH-HK'?'zh':code==='PT-BR'?'pt-BR':code.toLowerCase().replace('_','-'));"
    )
    lines.append("  document.documentElement.dir = (code==='AR') ? 'rtl' : 'ltr';")
    lines.append("  const lang = LANGS.find(l=>l.code===code);")
    lines.append("  const btn = document.getElementById('langSwitcherBtn');")
    lines.append(
        "  if(lang && btn) btn.innerHTML=`<span class=\\\"mini-flag\\\" style=\\\"background:${lang.flag}\\\"></span>${code} &#9662;`;"
    )
    lines.append("  const drop = document.getElementById('langDrop');")
    lines.append("  if(drop) drop.classList.remove('open');")
    lines.append("}")
    lines.append("")
    lines.append(
        "document.addEventListener('click',e=>{"
        "const drop=document.getElementById('langDrop');"
        "if(drop && !e.target.closest('.lang-switcher')) drop.classList.remove('open');"
        "});"
    )
    lines.append(
        "if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{ vbacBuildDropdown(); });"
        "else { vbacBuildDropdown(); }"
    )

    out_path = "virtual-audio-cable-i18n.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("Wrote", out_path, "(from cache)")


if __name__ == "__main__":
    import sys

    if "--from-cache" in sys.argv:
        emit_js_from_cache()
    else:
        main()
