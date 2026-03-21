# -*- coding: utf-8 -*-
"""Build download-llm-i18n-patch.js — translate EN HTML strings for LLM section + req/dl rows."""
import json
import time

try:
    from deep_translator import GoogleTranslator
except ImportError:
    raise SystemExit("pip install deep_translator")

CACHE_PATH = "download-llm-html-cache.json"

LANG_MAP = {
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

# Exact EN strings from S2S_Portable_Download.html I18N.EN (HTML preserved for translator)
EN_HTML = {
    "req_llm_dl": "Downloading LLM files (optional)",
    "req_llm_dl_v": "Yes (~8.1 GB one-time)",
    "dl_llm": "LLM pack (3 GGUF models)",
    "llm_title_inner": "Multilingual LLM Pack (Optional \u2014 Three .gguf Files)",
    "llm_lead": (
        "Want the same cutting-edge multilingual models power users run today \u2014 without hunting files across the web? "
        "You get <strong>three hand-picked checkpoints</strong> as <strong>separate .gguf files</strong> "
        "(there is <strong>no zip</strong> \u2014 nothing to unpack). Download them from the link below, then move each file into S2S\u2019s "
        "<code>models</code> folder. <strong>Already have another model?</strong> You can drop in <strong>any multilingual LLM you want</strong>, "
        "as long as it uses the <strong>.gguf</strong> format and the same <code>models</code> folder rules below."
    ),
    "llm_compat_h": "\u2705 Any multilingual LLM in <code>.gguf</code> format",
    "llm_compat_p": (
        "S2S Portable scans the <code>models</code> folder for <strong>.gguf</strong> checkpoints. You are <strong>not limited</strong> to our trio: "
        "place <strong>whatever multilingual LLM you prefer</strong> there, as long as the file ends in <strong>.gguf</strong> and sits "
        "<strong>directly in <code>models</code></strong> (not inside <code>nllb</code> or any subfolder). Pick a size your GPU can load. "
        "The three files listed further down are a <strong>curated, tested starter set</strong> \u2014 strong multilingual instruction models "
        "for reasoning, rephrasing, and extra language help next to your speech translation pipeline."
    ),
    "llm_tip_h": "\U0001f4a1 Do I need all three at once?",
    "llm_tip_p": (
        "<strong>No.</strong> You get the full trio so you can <strong>choose the best fit for your GPU</strong>: a featherweight option for tight VRAM, "
        "a balanced mid-size model, and a larger checkpoint when you want maximum quality. Install all files, then pick the one you want inside S2S \u2014 "
        "the others stay on disk for when you upgrade hardware or switch workloads. <strong>Your own <code>.gguf</code> files</strong> appear in the same list "
        "once they sit in <code>models</code>."
    ),
    "llm_list_intro": "Recommended bundle \u2014 three files (download separately or all from one link)",
    "llm_f1": (
        '<code style="color:var(--accent-secondary);">Qwen3.5-0.8B.q8_0.gguf</code> \u2014 <strong>Smallest &amp; fastest.</strong> '
        "Qwen3.5 in a tiny footprint: great when VRAM is limited or you want instant responses."
    ),
    "llm_f2": (
        '<code style="color:var(--accent-secondary);">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> \u2014 <strong>Sweet spot.</strong> '
        "Ministral instruct tuning with <strong>excellent multilingual coverage</strong> \u2014 the workhorse most people run day to day."
    ),
    "llm_f3": (
        '<code style="color:var(--accent-secondary);">qwen2.5-7b-instruct-q4_k_m.gguf</code> \u2014 <strong>Heaviest hitter.</strong> '
        "Qwen2.5 7B at solid quantization: reach for this when you have headroom and want the richest answers."
    ),
    "llm_dl_btn": "\u2B07 Download 3 LLMs (loose .gguf files \u2014 ~8.1 GB total)",
    "dl_llm_btn": "\u2B07 Download LLM pack (3 loose .gguf files \u2014 ~8.1 GB)",
    "llm_install_h": "\U0001f4c2 Installation (takes about a minute)",
    "llm_install_highlight": (
        "Put <strong>every</strong> LLM checkpoint <strong>only</strong> in the <code>models</code> folder \u2014 <strong>not</strong> inside "
        "<code>models\\nllb</code> or any other subfolder. Applies to our bundle <strong>and</strong> any other <code>.gguf</code> you add."
    ),
    "llm_install_p": (
        "For this bundle you get <strong>three separate .gguf files</strong>: move each into <code>S2S_Portable\\models\\</code> (next to the app). "
        "No extraction step. Keep these <strong>exact filenames</strong> so you know which is which. <strong>Any other multilingual <code>.gguf</code></strong> "
        "you download elsewhere goes in the <strong>same folder</strong> with the same rules \u2014 if S2S can load it on your GPU, it will show up in the model picker."
    ),
    "llm_install_note": (
        "If S2S was open, close and reopen it once so the new checkpoints show up in the model picker."
    ),
    "llm_lic_note": (
        "Each weight file remains under its <strong>original open license</strong> (for example Apache&nbsp;2.0 or Mistral\u2019s terms). "
        "You are responsible for using them in line with those licenses <strong>and</strong> with your S2S license tier (personal vs commercial). "
        "When in doubt, prefer the smaller Qwen checkpoints for experimentation and keep commercial workflows aligned with your agreement."
    ),
}


def tr(s: str, dest: str) -> str:
    if dest == "en":
        return s
    try:
        r = GoogleTranslator(source="en", target=dest).translate(s)
        return r if r else s
    except Exception:
        return s


def load_cache():
    try:
        with open(CACHE_PATH, encoding="utf-8") as fp:
            return json.load(fp)
    except Exception:
        return {}


def save_cache(c):
    with open(CACHE_PATH, "w", encoding="utf-8") as fp:
        json.dump(c, fp, ensure_ascii=True, indent=2)


def utf8_safe(s: str) -> str:
    return s.encode("utf-8", "replace").decode("utf-8")


def write_patch(out_by_lang):
    lines = [
        "(function(M){",
        "  if (typeof I18N === 'undefined') return;",
        "  Object.keys(M).forEach(function(c){",
        "    if (I18N[c]) Object.assign(I18N[c], M[c]);",
        "  });",
        "})({",
    ]
    first = True
    for code in LANG_MAP:
        if not first:
            lines.append(",")
        first = False
        lines.append(f"  {json.dumps(code)}: {{")
        keys = list(out_by_lang[code].keys())
        for i, k in enumerate(keys):
            comma = "," if i < len(keys) - 1 else ""
            lines.append(
                f"    {json.dumps(k)}: {json.dumps(utf8_safe(out_by_lang[code][k]), ensure_ascii=False)}{comma}"
            )
        lines.append("  }")
    lines.append("});")
    with open("download-llm-i18n-patch.js", "w", encoding="utf-8") as fp:
        fp.write("\n".join(lines))


def main():
    cache = load_cache()
    out = {}
    for code, gl in LANG_MAP.items():
        print(code, flush=True)
        if code not in cache:
            cache[code] = {}
        loc = cache[code]
        for k, v in EN_HTML.items():
            if loc.get(k):
                continue
            loc[k] = utf8_safe(tr(v, gl) or v)
            time.sleep(0.035)
            save_cache(cache)
        out[code] = dict(loc)
    write_patch(out)
    print("Wrote download-llm-i18n-patch.js")


def emit_from_cache():
    cache = load_cache()
    out = {}
    for code in LANG_MAP:
        merged = {**EN_HTML, **cache.get(code, {})}
        out[code] = merged
    write_patch(out)
    print("Wrote download-llm-i18n-patch.js (from cache)")


if __name__ == "__main__":
    import sys

    if "--from-cache" in sys.argv:
        emit_from_cache()
    else:
        main()
