(function(M){
  if (typeof I18N === 'undefined') return;
  Object.keys(M).forEach(function(c){
    if (I18N[c]) Object.assign(I18N[c], M[c]);
  });
})({
  "JA": {
    "req_llm_dl": "LLM ファイルのダウンロード (オプション)",
    "req_llm_dl_v": "はい (最大 8.1 GB 1 回)",
    "dl_llm": "LLM パック (3 GGUF モデル)",
    "llm_title_inner": "多言語 LLM パック (オプション - 3 つの .gguf ファイル)",

    "llm_compat_h": "✅ <code>.gguf</code> 形式の多言語 LLM",
    "llm_compat_p": "S2S Portable は、<code>models</code> フォルダをスキャンして <strong>.gguf</strong> チェックポイントを探します。私たちのトリオに<strong>限定されません</strong>。 ファイルが<strong>.gguf</strong> で終わり、<code>models</code></strong> 内に<strong>直接配置される限り（<code>nllb</code> やサブフォルダー内ではなく）、<strong>任意の多言語 LLM をそこに配置</strong>します。 GPU がロードできるサイズを選択してください。さらに下にリストされている 3 つのファイルは<strong>厳選され、テスト済みのスターター セット</strong>です。これは、推論、言い換え、および音声翻訳パイプラインの隣にある追加言語ヘルプのための強力な多言語命令モデルです。",
    "llm_tip_h": "💡 3 つすべてを一度に必要ですか?",
    "llm_tip_p": "<strong>いいえ。</strong> 完全なトリオが提供されるため、<strong>自分の GPU に最適なものを選択</strong>できます。つまり、タイトな VRAM 向けの軽量オプション、バランスの取れた中型モデル、そして最高の品質を求める場合の大きなチェックポイントです。すべてのファイルをインストールし、S2S 内に必要なファイルを選択します。残りのファイルは、ハードウェアをアップグレードするときやワークロードを切り替えるときに備えてディスク上に残ります。 <strong>独自の <code>.gguf</code> ファイル</strong>は、<code>models</code> に配置されると、同じリストに表示されます。",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>最小かつ最小値最速</strong> 小さな設置面積の Qwen3.5: VRAM が限られている場合、または即時の応答が必要な場合に最適です。",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>スイート スポット。</strong><strong>優れた多言語対応範囲</strong>を備えた省の指示チューニング。ほとんどの人が日常的に実行している主力製品です。",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>最も重い打者。</strong> ソリッド量子化での Qwen2.5 7B: ヘッドルームに余裕があり、最も豊かな答えが必要な場合にこれに手を伸ばしてください。",

    "llm_install_h": "📂 インストール (約 1 分かかります)",
    "llm_install_highlight": "<strong>すべての</strong> LLM チェックポイントを <code>models</code> フォルダに<strong>のみ</strong>入れます。<code>models\\nllb</code> やその他のサブフォルダ内には<strong>入れません</strong>。バンドル<strong>および</strong>追加する他の <code>.gguf</code> に適用されます。",

    "llm_install_note": "S2S が開いている場合は、一度閉じて再度開くと、新しいチェックポイントがモデル ピッカーに表示されます。",
    "llm_lic_note": "各ウェイト ファイルは、<strong>元のオープン ライセンス</strong>に基づいて維持されます (Apache&nbsp;2.0 や Mistral の規約など)。これらのライセンスを<strong>および</strong> S2S ライセンス層 (個人または商用) に従って使用するのはお客様の責任です。疑わしい場合は、実験用に小規模な Qwen チェックポイントを選択し、商用ワークフローを契約に合わせて維持してください。"
  }
,
  "KO": {
    "req_llm_dl": "LLM 파일 다운로드(선택 사항)",
    "req_llm_dl_v": "예(최대 8.1GB 일회성)",
    "dl_llm": "LLM 팩(GGUF 모델 3개)",
    "llm_title_inner": "다국어 LLM 팩(선택 사항 - 3개의 .gguf 파일)",

    "llm_compat_h": "✅ <code>.gguf</code> 형식의 모든 다국어 LLM",
    "llm_compat_p": "S2S Portable은 <code>models</code> 폴더에서 <strong>.gguf</strong> 체크포인트를 검색합니다. 우리의 트리오에만 <strong>제한은 없습니다</strong>. 파일이 <strong>.gguf</strong>로 끝나고 <strong><code>모델</code></strong>(<code>nllb</code> 또는 하위 폴더 내부가 아님)에 직접 위치하는 한 <strong>원하는 다국어 LLM</strong>을 여기에 배치하세요. GPU가 로드할 수 있는 크기를 선택하세요. 아래에 나열된 세 개의 파일은 <strong>선별되고 테스트된 시작 세트</strong>입니다. 이는 추론, 표현 변경 및 음성 번역 파이프라인 옆의 추가 언어 도움말을 위한 강력한 다국어 지침 모델입니다.",
    "llm_tip_h": "💡 세 가지가 동시에 필요한가요?",
    "llm_tip_p": "<strong>아니요.</strong> <strong>GPU에 가장 적합한 것을 선택</strong>할 수 있도록 전체 트리오를 얻을 수 있습니다. 즉, 타이트한 VRAM을 위한 가벼운 옵션, 균형 잡힌 중간 크기 모델, 최대 품질을 원하는 경우 더 큰 체크포인트가 있습니다. 모든 파일을 설치한 다음 S2S 내에서 원하는 파일을 선택하세요. 나머지 파일은 하드웨어를 업그레이드하거나 작업 부하를 전환할 때를 위해 디스크에 유지됩니다. <strong>자신의 <code>.gguf</code> 파일</strong>이 <code>모델</code>에 있으면 동일한 목록에 나타납니다.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>최소 &amp; 가장 빠릅니다.</strong> 작은 설치 공간의 Qwen3.5: VRAM이 제한되어 있거나 즉각적인 응답을 원하는 경우에 적합합니다.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>최적의 지점.</strong> <strong>뛰어난 다국어 지원</strong>을 갖춘 Ministral 지침 튜닝 — 대부분의 사람들이 매일 사용하는 주력 제품입니다.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>가장 무거운 타자.</strong> 견고한 양자화의 Qwen2.5 7B: 여유 공간이 있고 가장 풍부한 답변을 원할 때 이 기능을 사용하세요.",

    "llm_install_h": "📂 설치(1분 정도 소요)",
    "llm_install_highlight": "<strong>모든</strong> LLM 체크포인트를 <code>models</code> 폴더에만 <strong></strong> 배치합니다. <code>models\\nllb</code>나 다른 하위 폴더 내부는 <strong>아닙니다</strong>. 우리 번들 <strong>및</strong> 귀하가 추가하는 다른 모든 <code>.gguf</code>에 적용됩니다.",

    "llm_install_note": "S2S가 열려 있는 경우 한 번 닫았다가 다시 열면 모델 선택기에 새 체크포인트가 표시됩니다.",
    "llm_lic_note": "각 가중치 파일은 <strong>원래 공개 라이선스</strong>(예: Apache&nbsp;2.0 또는 Mistral의 약관)에 따라 유지됩니다. 해당 라이선스 <strong>및</strong> S2S 라이선스 등급(개인용 및 상업용)에 따라 이를 사용할 책임은 귀하에게 있습니다. 의심스러운 경우 실험을 위해 더 작은 Qwen 체크포인트를 선호하고 상업적 워크플로를 계약에 맞게 유지하세요."
  }
,
  "ZH": {
    "req_llm_dl": "下载LLM文件（可选）",
    "req_llm_dl_v": "是（一次性约 8.1 GB）",
    "dl_llm": "LLM 包（3 个 GGUF 模型）",
    "llm_title_inner": "多语言 LLM 包（可选 - 三个 .gguf 文件）",

    "llm_compat_h": "✅ 任何 <code>.gguf</code> 格式的多语言 LLM",
    "llm_compat_p": "S2S Portable 扫描 <code>models</code> 文件夹中的 <strong>.gguf</strong> 检查点。您<strong>不限于</strong>我们的三重奏：将<strong>任何您喜欢的多语言LLM</strong>放在那里，只要文件以<strong>.gguf</strong>结尾并且<strong>直接位于<code>models</code></strong>中（不在<code>nllb</code>或任何子文件夹中）。选择您的 GPU 可以加载的大小。下面列出的三个文件是<strong>精心策划、经过测试的入门套件</strong> - 强大的多语言教学模型，用于推理、改写和语音翻译管道旁边的额外语言帮助。",
    "llm_tip_h": "💡 我需要同时三个吗？",
    "llm_tip_p": "<strong>不。</strong>您获得了完整的三重奏，因此您可以<strong>选择最适合您的 GPU</strong>：适用于紧凑 VRAM 的轻量级选项、平衡的中型型号以及当您想要最高质量时更大的检查点。安装所有文件，然后在 S2S 中选择您想要的文件 - 其他文件保留在磁盘上，以便在您升级硬件或切换工作负载时使用。 <strong>您自己的 <code>.gguf</code> 文件</strong>一旦位于<code>模型</code>中，就会出现在同一列表中。",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>最小和最小速度最快。</strong> Qwen3.5 占用空间很小：当 VRAM 有限或您需要即时响应时非常有用。",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>最佳位置。</strong>具有<strong>出色的多语言覆盖范围</strong>的 Ministral 指令调优 — 大多数人日常运行的主力。",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>最重击球手。</strong> Qwen2.5 7B 具有可靠的量化能力：当您有空间并想要最丰富的答案时，请使用此工具。",

    "llm_install_h": "📂 安装（大约需要一分钟）",
    "llm_install_highlight": "将<strong>每个</strong> LLM 检查点<strong>仅</strong>放入<code>models</code> 文件夹中，<strong>不</strong>放入<code>models\\nllb</code> 或任何其他子文件夹中。适用于我们的捆绑包<strong>和</strong>您添加的任何其他<code>.gguf</code>。",

    "llm_install_note": "如果 S2S 已打开，请关闭并重新打开一次，以便新的检查点显示在模型选择器中。",
    "llm_lic_note": "每个权重文件均保留其<strong>原始开放许可证</strong>（例如 Apache 2.0 或 Mistral 的条款）。您有责任按照这些许可证<strong>和</strong>您的 S2S 许可证层（个人与商业）使用它们。如有疑问，请选择较小的 Qwen 检查点进行实验，并使商业工作流程与您的协议保持一致。"
  }
,
  "ES": {
    "req_llm_dl": "Descarga de archivos LLM (opcional)",
    "req_llm_dl_v": "Sí (~8,1 GB por única vez)",
    "dl_llm": "Paquete LLM (3 modelos GGUF)",
    "llm_title_inner": "Paquete LLM multilingüe (opcional: tres archivos .gguf)",

    "llm_compat_h": "✅ Cualquier LLM multilingüe en formato <code>.gguf</code>",
    "llm_compat_p": "S2S Portable escanea la carpeta <code>models</code> en busca de puntos de control <strong>.gguf</strong>. No estás <strong>limitado</strong> a nuestro trío: coloca <strong>cualquier LLM multilingüe que prefieras</strong> allí, siempre y cuando el archivo termine en <strong>.gguf</strong> y se encuentre <strong>directamente en <code>models</code></strong> (no dentro de <code>nllb</code> ni en ninguna subcarpeta). Elija un tamaño que su GPU pueda cargar. Los tres archivos que se enumeran a continuación son un <strong>conjunto inicial seleccionado y probado</strong>: sólidos modelos de instrucción multilingüe para razonamiento, reformulación y ayuda lingüística adicional junto a su proceso de traducción de voz.",
    "llm_tip_h": "💡 ¿Necesito los tres a la vez?",
    "llm_tip_p": "<strong>No.</strong> Obtienes el trío completo para que puedas <strong>elegir la mejor opción para tu GPU</strong>: una opción liviana para VRAM ajustada, un modelo de tamaño mediano equilibrado y un punto de control más grande cuando deseas la máxima calidad. Instale todos los archivos, luego elija el que desee dentro de S2S; los demás permanecen en el disco para cuando actualice el hardware o cambie de carga de trabajo. <strong>Tus propios archivos <code>.gguf</code></strong> aparecen en la misma lista una vez que se ubican en <code>modelos</code>.",

    "llm_f1": "<code style=\"color:var(--accent- secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>El más pequeño y compacto; más rápido.</strong> Qwen3.5 en un espacio reducido: excelente cuando la VRAM es limitada o desea respuestas instantáneas.",
    "llm_f2": "<code style=\"color:var(--accent-secundary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code>: <strong>punto ideal.</strong> Ajuste de instrucciones Ministral con <strong>excelente cobertura multilingüe</strong>: el caballo de batalla que la mayoría de la gente maneja día a día.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>El mejor bateador.</strong> Qwen2.5 7B con una cuantificación sólida: utilice esto cuando tenga margen de maniobra y desee las respuestas más completas.",

    "llm_install_h": "📂 Instalación (tarda aproximadamente un minuto)",
    "llm_install_highlight": "Coloque <strong>cada</strong> punto de control de LLM <strong>solo</strong> en la carpeta <code>models</code>, <strong>no</strong> dentro de <code>models\\nllb</code> ni en ninguna otra subcarpeta. Se aplica a nuestro paquete <strong>y</strong> cualquier otro <code>.gguf</code> que agregues.",

    "llm_install_note": "Si S2S estaba abierto, ciérrelo y vuelva a abrirlo una vez para que los nuevos puntos de control aparezcan en el selector de modelo.",
    "llm_lic_note": "Cada archivo de peso permanece bajo su <strong>licencia abierta original</strong> (por ejemplo Apache 2.0 o los términos de Mistral). Usted es responsable de usarlos de acuerdo con esas licencias <strong>y</strong> con su nivel de licencia S2S (personal o comercial). En caso de duda, prefiera los puntos de control Qwen más pequeños para experimentar y mantenga los flujos de trabajo comerciales alineados con su acuerdo."
  }
,
  "FR": {
    "req_llm_dl": "Téléchargement de fichiers LLM (facultatif)",
    "req_llm_dl_v": "Oui (~ 8,1 Go une fois)",
    "dl_llm": "Pack LLM (3 modèles GGUF)",
    "llm_title_inner": "Pack LLM multilingue (facultatif — trois fichiers .gguf)",

    "llm_compat_h": "✅ Tout LLM multilingue au format <code>.gguf</code>",
    "llm_compat_p": "S2S Portable analyse le dossier <code>models</code> à la recherche de points de contrôle <strong>.gguf</strong>. Vous n'êtes <strong>pas limité</strong> à notre trio : placez-y <strong>le LLM multilingue que vous préférez</strong>, à condition que le fichier se termine par <strong>.gguf</strong> et se trouve <strong>directement dans les <code>models</code></strong> (pas dans <code>nllb</code> ou dans un sous-dossier). Choisissez une taille que votre GPU peut charger. Les trois fichiers répertoriés plus bas constituent un <strong>ensemble de démarrage organisé et testé</strong> : de solides modèles d'instructions multilingues pour le raisonnement, la reformulation et une aide linguistique supplémentaire à côté de votre pipeline de traduction vocale.",
    "llm_tip_h": "💡 Ai-je besoin des trois à la fois ?",
    "llm_tip_p": "<strong>Non.</strong> Vous obtenez le trio complet afin que vous puissiez <strong>choisir la meilleure solution pour votre GPU</strong> : une option poids plume pour une VRAM serrée, un modèle de taille moyenne équilibré et un point de contrôle plus grand lorsque vous souhaitez une qualité maximale. Installez tous les fichiers, puis choisissez celui que vous souhaitez dans S2S – les autres restent sur le disque lorsque vous mettez à niveau le matériel ou changez de charge de travail. <strong>Vos ​​propres fichiers <code>.gguf</code></strong> apparaissent dans la même liste une fois qu'ils se trouvent dans les <code>modèles</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Le plus petit et le plus petit ; le plus rapide.</strong> Qwen3.5 dans un encombrement réduit : idéal lorsque la VRAM est limitée ou que vous souhaitez des réponses instantanées.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Le point idéal.</strong> Réglage des instructions Ministral avec <strong>une excellente couverture multilingue</strong> — le cheval de bataille que la plupart des gens utilisent au quotidien.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Le plus gros frappeur.</strong> Qwen2.5 7B avec une quantification solide : optez pour cela lorsque vous avez de la marge et que vous voulez les réponses les plus riches.",

    "llm_install_h": "📂 Installation (prend environ une minute)",
    "llm_install_highlight": "Placez <strong>chaque</strong> point de contrôle LLM <strong>uniquement</strong> dans le dossier <code>models</code> - <strong>pas</strong> dans <code>models\\nllb</code> ou dans tout autre sous-dossier. S'applique à notre offre groupée <strong>et</strong> à tout autre <code>.gguf</code> que vous ajoutez.",

    "llm_install_note": "Si S2S était ouvert, fermez-le et rouvrez-le une fois pour que les nouveaux points de contrôle apparaissent dans le sélecteur de modèle.",
    "llm_lic_note": "Chaque fichier de poids reste sous sa <strong>licence ouverte d'origine</strong> (par exemple les termes d'Apache&nbsp;2.0 ou de Mistral). Vous êtes responsable de les utiliser conformément à ces licences <strong>et</strong> à votre niveau de licence S2S (personnelle ou commerciale). En cas de doute, préférez les points de contrôle Qwen plus petits pour l'expérimentation et maintenez les flux de travail commerciaux alignés sur votre accord."
  }
,
  "DE": {
    "req_llm_dl": "Herunterladen von LLM-Dateien (optional)",
    "req_llm_dl_v": "Ja (~8,1 GB einmalig)",
    "dl_llm": "LLM-Paket (3 GGUF-Modelle)",
    "llm_title_inner": "Mehrsprachiges LLM-Paket (optional – drei .gguf-Dateien)",

    "llm_compat_h": "✅ Jedes mehrsprachige LLM im <code>.gguf</code>-Format",
    "llm_compat_p": "S2S Portable durchsucht den Ordner <code>models</code> nach <strong>.gguf</strong>-Prüfpunkten. Sie sind <strong>nicht</strong> auf unser Trio beschränkt: Platzieren Sie <strong>das von Ihnen bevorzugte mehrsprachige LLM</strong> dort, solange die Datei auf <strong>.gguf</strong> endet und <strong>direkt in <code>models</code></strong> liegt (nicht in <code>nllb</code> oder einem Unterordner). Wählen Sie eine Größe, die Ihre GPU laden kann. Bei den drei weiter unten aufgeführten Dateien handelt es sich um ein <strong>kuratiertes, getestetes Starterset</strong> – leistungsstarke mehrsprachige Unterrichtsmodelle für Argumentation, Umformulierung und zusätzliche Sprachhilfe neben Ihrer Sprachübersetzungspipeline.",
    "llm_tip_h": "💡 Brauche ich alle drei auf einmal?",
    "llm_tip_p": "<strong>Nein.</strong> Sie erhalten das komplette Trio, sodass Sie <strong>die beste Lösung für Ihre GPU auswählen können</strong>: eine federleichte Option für knappen VRAM, ein ausgewogenes Mittelklassemodell und einen größeren Kontrollpunkt, wenn Sie maximale Qualität wünschen. Installieren Sie alle Dateien und wählen Sie dann die gewünschte in S2S aus – die anderen bleiben auf der Festplatte, wenn Sie die Hardware aktualisieren oder die Arbeitslast wechseln. <strong>Ihre eigenen <code>.gguf</code>-Dateien</strong> erscheinen in derselben Liste, sobald sie sich in <code>models</code> befinden.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> – <strong>Kleinste &amp; am schnellsten.</strong> Qwen3.5 auf kleinstem Raum: ideal, wenn der VRAM begrenzt ist oder Sie sofortige Antworten wünschen.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> – <strong>Sweet Spot.</strong> Ministral Instruktions-Tuning mit <strong>hervorragender mehrsprachiger Abdeckung</strong> – das Arbeitstier, mit dem die meisten Menschen tagtäglich arbeiten.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> – <strong>Schwerester Schlagmann.</strong> Qwen2.5 7B bei solider Quantisierung: Greifen Sie zu dieser Option, wenn Sie Spielraum haben und die reichhaltigsten Antworten wünschen.",

    "llm_install_h": "📂 Installation (dauert etwa eine Minute)",
    "llm_install_highlight": "Platzieren Sie <strong>jeden</strong> LLM-Prüfpunkt <strong>nur</strong> im Ordner <code>models</code> – <strong>nicht</strong> innerhalb von <code>models\\nllb</code> oder einem anderen Unterordner. Gilt für unser Bundle <strong>und</strong> alle anderen von Ihnen hinzugefügten <code>.gguf</code>.",

    "llm_install_note": "Wenn S2S geöffnet war, schließen Sie es und öffnen Sie es einmal erneut, damit die neuen Prüfpunkte in der Modellauswahl angezeigt werden.",
    "llm_lic_note": "Jede Gewichtsdatei unterliegt weiterhin ihrer <strong>ursprünglichen offenen Lizenz</strong> (z. B. den Bedingungen von Apache 2.0 oder Mistral). Sie sind dafür verantwortlich, sie im Einklang mit diesen Lizenzen <strong>und</strong> Ihrer S2S-Lizenzstufe (persönlich oder kommerziell) zu verwenden. Im Zweifelsfall bevorzugen Sie zum Experimentieren die kleineren Qwen-Kontrollpunkte und sorgen dafür, dass die kommerziellen Arbeitsabläufe an Ihrer Vereinbarung ausgerichtet sind."
  }
,
  "IT": {
    "req_llm_dl": "Download dei file LLM (facoltativo)",
    "req_llm_dl_v": "Sì (~8,1 GB una tantum)",
    "dl_llm": "Pacchetto LLM (3 modelli GGUF)",
    "llm_title_inner": "Pacchetto LLM multilingue (facoltativo: tre file .gguf)",

    "llm_compat_h": "✅ Qualsiasi LLM multilingue in formato <code>.gguf</code>",
    "llm_compat_p": "S2S Portable esegue la scansione della cartella <code>models</code> per individuare checkpoint <strong>.gguf</strong>. Non sei limitato <strong>non</strong> al nostro trio: posiziona <strong>qualsiasi LLM multilingue che preferisci</strong> lì, purché il file termini in <strong>.gguf</strong> e si trovi <strong>direttamente in <code>models</code></strong> (non all'interno di <code>nllb</code> o qualsiasi sottocartella). Scegli una dimensione che la tua GPU può caricare. I tre file elencati più in basso costituiscono un <strong>set iniziale curato e testato</strong>: validi modelli di istruzioni multilingue per il ragionamento, la riformulazione e un aiuto linguistico aggiuntivo accanto alla pipeline di traduzione vocale.",
    "llm_tip_h": "💡 Ne ho bisogno tutti e tre contemporaneamente?",
    "llm_tip_p": "<strong>No.</strong> Ottieni il trio completo in modo da poter <strong>scegliere la soluzione migliore per la tua GPU</strong>: un'opzione leggerissima per una VRAM ridotta, un modello bilanciato di medie dimensioni e un punto di controllo più ampio quando desideri la massima qualità. Installa tutti i file, quindi scegli quello che desideri all'interno di S2S: gli altri rimangono sul disco per quando aggiorni l'hardware o cambi carico di lavoro. <strong>I tuoi file <code>.gguf</code></strong> vengono visualizzati nello stesso elenco una volta inseriti nei <code>models</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Più piccolo e amp; più veloce.</strong> Qwen3.5 in un ingombro minimo: ottimo quando la VRAM è limitata o desideri risposte immediate.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Ottimo punto.</strong> Sintonizzazione Ministral con <strong>eccellente copertura multilingue</strong>: il cavallo di battaglia che la maggior parte delle persone utilizza quotidianamente.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Il battitore più pesante.</strong> Qwen2.5 7B con quantizzazione solida: raggiungi questo quando hai margine e desideri le risposte più ricche.",

    "llm_install_h": "📂 Installazione (richiede circa un minuto)",
    "llm_install_highlight": "Inserisci <strong>ogni</strong> checkpoint LLM <strong>solo</strong> nella cartella <code>models</code> — <strong>non</strong> all'interno di <code>models\\nllb</code> o in qualsiasi altra sottocartella. Si applica al nostro bundle <strong>e</strong> a qualsiasi altro <code>.gguf</code> aggiunto.",

    "llm_install_note": "Se S2S era aperto, chiudilo e riaprilo una volta in modo che i nuovi checkpoint vengano visualizzati nel selettore modello.",
    "llm_lic_note": "Ogni file di peso rimane sotto la sua <strong>licenza aperta originale</strong> (ad esempio i termini di Apache&nbsp;2.0 o Mistral). Sei responsabile del loro utilizzo in linea con tali licenze <strong>e</strong> con il tuo livello di licenza S2S (personale o commerciale). In caso di dubbio, preferisci i checkpoint Qwen più piccoli per la sperimentazione e mantieni i flussi di lavoro commerciali allineati al tuo accordo."
  }
,
  "PT": {
    "req_llm_dl": "Baixando arquivos LLM (opcional)",
    "req_llm_dl_v": "Sim (~8,1 GB único)",
    "dl_llm": "Pacote LLM (3 modelos GGUF)",
    "llm_title_inner": "Pacote LLM multilíngue (opcional – três arquivos .gguf)",

    "llm_compat_h": "✅ Qualquer LLM multilíngue no formato <code>.gguf</code>",
    "llm_compat_p": "S2S Portable verifica a pasta <code>models</code> em busca de pontos de verificação <strong>.gguf</strong>. Você <strong>não está limitado</strong> ao nosso trio: coloque <strong>qualquer LLM multilíngue de sua preferência</strong> lá, desde que o arquivo termine em <strong>.gguf</strong> e fique <strong>diretamente em <code>models</code></strong> (não dentro de <code>nllb</code> ou qualquer subpasta). Escolha um tamanho que sua GPU possa carregar. Os três arquivos listados mais abaixo são um <strong>conjunto inicial testado e com curadoria</strong> — fortes modelos de instrução multilíngue para raciocínio, reformulação e ajuda extra no idioma junto com seu pipeline de tradução de fala.",
    "llm_tip_h": "💡 Preciso dos três de uma vez?",
    "llm_tip_p": "<strong>Não.</strong> Você obtém o trio completo para poder <strong>escolher o que melhor se adapta à sua GPU</strong>: uma opção leve para VRAM compacta, um modelo de tamanho médio balanceado e um ponto de verificação maior quando você deseja qualidade máxima. Instale todos os arquivos e escolha aquele que deseja dentro do S2S — os outros permanecem no disco para quando você atualizar o hardware ou alternar cargas de trabalho. <strong>Seus próprios arquivos <code>.gguf</code> aparecem na mesma lista quando estão em <code>models</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Menor e menor; mais rápido.</strong> Qwen3.5 em um tamanho pequeno: ótimo quando a VRAM é limitada ou você deseja respostas instantâneas.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Local ideal.</strong> Ajuste de instrutor Ministral com <strong>excelente cobertura multilíngue</strong> — o burro de carga que a maioria das pessoas usa no dia a dia.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>rebatedor mais pesado.</strong> Qwen2.5 7B em quantização sólida: alcance isso quando tiver espaço e quiser as respostas mais ricas.",

    "llm_install_h": "📂 Instalação (leva cerca de um minuto)",
    "llm_install_highlight": "Coloque <strong>todos</strong> pontos de verificação LLM <strong>somente</strong> na pasta <code>models</code> — <strong>não</strong> dentro de <code>models\\nllb</code> ou qualquer outra subpasta. Aplica-se ao nosso pacote <strong>e</strong> a qualquer outro <code>.gguf</code> que você adicionar.",

    "llm_install_note": "Se o S2S estiver aberto, feche-o e reabra-o uma vez para que os novos pontos de verificação apareçam no seletor de modelos.",
    "llm_lic_note": "Cada arquivo de peso permanece sob sua <strong>licença aberta original</strong> (por exemplo, Apache 2.0 ou termos do Mistral). Você é responsável por usá-los de acordo com essas licenças <strong>e</strong> com seu nível de licença S2S (pessoal x comercial). Em caso de dúvida, prefira os pontos de verificação Qwen menores para experimentação e mantenha os fluxos de trabalho comerciais alinhados com o seu acordo."
  }
,
  "RU": {
    "req_llm_dl": "Загрузка файлов LLM (необязательно)",
    "req_llm_dl_v": "Да (~8,1 ГБ единоразово)",
    "dl_llm": "Пакет LLM (3 модели GGUF)",
    "llm_title_inner": "Многоязычный пакет LLM (дополнительно — три файла .gguf)",

    "llm_compat_h": "✅ Любой многоязычный LLM в формате <code>.gguf</code>.",
    "llm_compat_p": "S2S Portable сканирует папку <code>models</code> на наличие контрольных точек <strong>.gguf</strong>. Вы <strong>не ограничены</strong> нашим трио: поместите туда <strong>любой многоязычный LLM, который вы предпочитаете</strong>, при условии, что файл заканчивается на <strong>.gguf</strong> и находится <strong>непосредственно в <code>моделях</code></strong> (а не внутри <code>nllb</code> или какой-либо подпапке). Выберите размер, который может загрузить ваш графический процессор. Три файла, перечисленные ниже, представляют собой <strong> тщательно подобранный, протестированный стартовый набор</strong> — надежные многоязычные модели инструкций для рассуждения, перефразирования и дополнительной языковой помощи в дополнение к вашему конвейеру перевода речи.",
    "llm_tip_h": "💡 Нужны ли мне все три сразу?",
    "llm_tip_p": "<strong>Нет.</strong> Вы получаете полное трио, чтобы вы могли <strong>выбрать наиболее подходящий для вашего графического процессора</strong>: легкий вариант для ограниченного объема видеопамяти, сбалансированную модель среднего размера и большую контрольную точку, когда вам нужно максимальное качество. Установите все файлы, а затем выберите нужный внутри S2S — остальные остаются на диске, когда вы обновляете оборудование или переключаете рабочие нагрузки. <strong>Ваши собственные файлы <code>.gguf</code></strong> появляются в том же списке, когда они находятся в <code>моделях</code>.",

    "llm_f1": "<code style=\"color:var(--accent-вторичный);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Самый маленький &amp; самый быстрый.</strong> Qwen3.5 занимает мало места: отлично подходит, когда объем видеопамяти ограничен или вам нужен мгновенный отклик.",
    "llm_f2": "<code style=\"color:var(--accent-вторичный);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> – <strong>Оптимальное решение.</strong> Настройка инструкций Ministral с <strong>отличным многоязычным охватом</strong> — рабочая лошадка, с которой большинство людей работают изо дня в день.",
    "llm_f3": "<code style=\"color:var(--accent-вторичный);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Самый сильный нападающий.</strong> Qwen2.5 7B при сплошном квантовании: используйте его, когда у вас есть запас и вам нужны самые полные ответы.",

    "llm_install_h": "📂 Установка (занимает около минуты)",
    "llm_install_highlight": "Поместите <strong>каждую</strong> контрольную точку LLM <strong>только</strong> в папку <code>models</code> — <strong>не</strong> внутри <code>models\\nllb</code> или любой другой подпапки. Применяется к нашему пакету <strong>и</strong> любому другому <code>.gguf</code>, который вы добавляете.",

    "llm_install_note": "Если S2S был открыт, закройте и снова откройте его один раз, чтобы новые контрольные точки отобразились в средстве выбора модели.",
    "llm_lic_note": "На каждый файл весов распространяется <strong>исходная открытая лицензия</strong> (например, условия Apache&nbsp;2.0 или Mistral). Вы несете ответственность за их использование в соответствии с этими лицензиями <strong>и</strong> с вашим уровнем лицензии S2S (личным или коммерческим). Если у вас есть сомнения, отдайте предпочтение меньшим контрольным точкам Qwen для экспериментов и согласуйте коммерческие рабочие процессы с вашим соглашением."
  }
,
  "UK": {
    "req_llm_dl": "Завантаження файлів LLM (необов'язково)",
    "req_llm_dl_v": "Так (~8,1 ГБ одноразово)",
    "dl_llm": "Пакет LLM (3 моделі GGUF)",
    "llm_title_inner": "Багатомовний пакет LLM (необов’язково — три файли .gguf)",

    "llm_compat_h": "✅ Будь-який багатомовний LLM у форматі <code>.gguf</code>",
    "llm_compat_p": "S2S Portable сканує папку <code>models</code> на наявність контрольних точок <strong>.gguf</strong>. Ви <strong>не обмежені</strong> нашою трійкою: розмістіть там <strong>будь-яку багатомовну LLM, яку ви віддаєте перевагу</strong>, якщо файл закінчується на <strong>.gguf</strong> і знаходиться <strong>безпосередньо в <code>models</code></strong> (не всередині <code>nllb</code> чи будь-якої підпапки). Виберіть розмір, який може завантажувати ваш графічний процесор. Три файли, перелічені нижче, є <strong>підібраним, перевіреним стартовим набором</strong> — надійними багатомовними моделями інструкцій для міркування, перефразування та додаткової мовної допомоги поруч із вашим конвеєром перекладу мовлення.",
    "llm_tip_h": "💡 Мені потрібні всі три відразу?",
    "llm_tip_p": "<strong>Ні.</strong> Ви отримуєте повну трійку, тож можете <strong>вибрати найкращий варіант для свого графічного процесора</strong>: легкий варіант для малого об’єму відеопам’яті, збалансована модель середнього розміру та більша контрольна точка, коли вам потрібна максимальна якість. Встановіть усі файли, а потім виберіть потрібний у S2S — інші залишаються на диску, коли ви оновлюєте обладнання або змінюєте робоче навантаження. <strong>Ваші файли <code>.gguf</code></strong> відображаються в тому самому списку, коли вони знаходяться в <code>models</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Найменший &amp; найшвидший.</strong> Qwen3.5 займає невелику площу: чудово, коли відеопам’ять обмежена або вам потрібні миттєві відповіді.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Чудове місце.</strong> Налаштування Ministral instruct із <strong>чудовим багатомовним покриттям</strong> — робочою конячкою, якою більшість людей користується щодня.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Найсильніший удар.</strong> Qwen2.5 7B із надійним квантуванням: дотягніться до цього, якщо у вас є запас і потрібні найбагатші відповіді.",

    "llm_install_h": "📂 Установка (приблизно хвилину)",
    "llm_install_highlight": "Розмістіть <strong>кожну</strong> контрольну точку LLM <strong>тільки</strong> в папці <code>models</code> — <strong>не</strong> в <code>models\\nllb</code> або будь-якій іншій вкладеній папці. Застосовується до нашого набору <strong>і</strong> будь-якого іншого <code>.gguf</code>, який ви додаєте.",

    "llm_install_note": "Якщо S2S був відкритий, закрийте та знову відкрийте його один раз, щоб нові контрольні точки з’явилися в засобі вибору моделі.",
    "llm_lic_note": "Кожен файл ваги залишається під своєю <strong>оригінальною відкритою ліцензією</strong> (наприклад, Apache&nbsp;2.0 або умови Mistral). Ви несете відповідальність за їх використання згідно з цими ліцензіями <strong>та</strong> з вашим рівнем ліцензії S2S (особиста чи комерційна). Якщо сумніваєтеся, віддайте перевагу меншим контрольним точкам Qwen для експериментів і дотримуйтесь комерційних робочих процесів у відповідності з вашою угодою."
  }
,
  "PL": {
    "req_llm_dl": "Pobieranie plików LLM (opcjonalnie)",
    "req_llm_dl_v": "Tak (~8,1 GB jednorazowo)",
    "dl_llm": "Pakiet LLM (3 modele GGUF)",
    "llm_title_inner": "Wielojęzyczny pakiet LLM (opcjonalnie — trzy pliki .gguf)",

    "llm_compat_h": "✅ Dowolny wielojęzyczny LLM w formacie <code>.gguf</code>",
    "llm_compat_p": "S2S Portable skanuje folder <code>models</code> w poszukiwaniu punktów kontrolnych <strong>.gguf</strong>. Nie jesteś <strong>nieograniczony</strong> do naszego trio: umieść tam <strong>dowolny wielojęzyczny LLM, który wolisz</strong>, pod warunkiem, że plik kończy się na <strong>.gguf</strong> i znajduje się <strong>bezpośrednio w <code>models</code></strong> (a nie w <code>nllb</code> ani żadnym podfolderze). Wybierz rozmiar, jaki może załadować Twój procesor graficzny. Trzy pliki wymienione poniżej to <strong>wybrany, przetestowany zestaw startowy</strong> — silne, wielojęzyczne modele instrukcji do rozumowania, przeformułowania i dodatkowej pomocy językowej obok potoku tłumaczenia mowy.",
    "llm_tip_h": "💡 Czy potrzebuję wszystkich trzech na raz?",
    "llm_tip_p": "<strong>Nie.</strong> Otrzymujesz pełne trio, dzięki czemu możesz <strong>wybrać to, co najlepiej pasuje do Twojego procesora graficznego</strong>: lekka jak piórko opcja dla małej ilości pamięci VRAM, zrównoważony model średniej wielkości i większy punkt kontrolny, gdy chcesz uzyskać maksymalną jakość. Zainstaluj wszystkie pliki, a następnie wybierz ten, który chcesz w S2S — pozostałe pozostają na dysku podczas aktualizacji sprzętu lub zmiany obciążenia. <strong>Twoje własne pliki <code>.gguf</code></strong> pojawiają się na tej samej liście, gdy znajdą się w <code>modelach</code>.",

    "llm_f1": "<code style=\"color:var(--accent-wtórny);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Najmniejszy &amp; najszybszy.</strong> Qwen3.5 w niewielkiej obudowie: świetny, gdy pamięć VRAM jest ograniczona lub chcesz natychmiastowej reakcji.",
    "llm_f2": "<code style=\"color:var(--accent-wtórny);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Świetny punkt.</strong> Strojenie instrukcji Ministral z <strong>doskonałym zasięgiem wielojęzycznym</strong> — koń pociągowy, z którym większość ludzi pracuje na co dzień.",
    "llm_f3": "<code style=\"color:var(--accent-wtórny);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Najmocniejszy cios.</strong> Qwen2.5 7B przy solidnej kwantyzacji: sięgnij po to, jeśli masz zapas i chcesz uzyskać najbogatsze odpowiedzi.",

    "llm_install_h": "📂 Instalacja (trwa około minuty)",
    "llm_install_highlight": "Umieść <strong>każdy</strong> punkt kontrolny LLM <strong>tylko</strong> w folderze <code>models</code> — <strong>nie</strong> w <code>models\\nllb</code> ani żadnym innym podfolderze. Dotyczy naszego pakietu <strong>i</strong> każdego innego dodanego pliku <code>.gguf</code>.",

    "llm_install_note": "Jeśli S2S był otwarty, zamknij go i otwórz ponownie, aby nowe punkty kontrolne pojawiły się w selektorze modeli.",
    "llm_lic_note": "Każdy plik wagi pozostaje objęty <strong>oryginalną otwartą licencją</strong> (na przykład warunkami Apache&nbsp;2.0 lub Mistral). Odpowiadasz za używanie ich zgodnie z tymi licencjami <strong>oraz</strong> zgodnie z poziomem licencji S2S (osobistej lub komercyjnej). W razie wątpliwości preferuj mniejsze punkty kontrolne Qwen do eksperymentów i utrzymuj komercyjne przepływy pracy zgodne z umową."
  }
,
  "NL": {
    "req_llm_dl": "LLM-bestanden downloaden (optioneel)",
    "req_llm_dl_v": "Ja (~8,1 GB eenmalig)",
    "dl_llm": "LLM-pakket (3 GGUF-modellen)",
    "llm_title_inner": "Meertalig LLM-pakket (optioneel: drie .gguf-bestanden)",

    "llm_compat_h": "✅ Elke meertalige LLM in <code>.gguf</code>-formaat",
    "llm_compat_p": "S2S Portable scant de map <code>modellen</code> op <strong>.gguf</strong> controlepunten. U bent <strong>niet beperkt</strong> tot ons trio: plaats <strong>de meertalige LLM die u verkiest</strong> daar, zolang het bestand eindigt op <strong>.gguf</strong> en <strong>direct in <code>models</code></strong> staat (niet in <code>nllb</code> of een submap). Kies een formaat dat uw GPU kan laden. De drie bestanden verderop vermeld zijn een <strong>samengestelde, geteste starterset</strong>: sterke meertalige instructiemodellen voor redeneren, herformuleren en extra taalhulp naast uw spraakvertalingspijplijn.",
    "llm_tip_h": "💡Heb ik ze alle drie tegelijk nodig?",
    "llm_tip_p": "<strong>Nee.</strong> Je krijgt het volledige trio, zodat je <strong>de beste pasvorm voor je GPU kunt kiezen</strong>: een vederlichte optie voor krap VRAM, een uitgebalanceerd middelgroot model en een groter controlepunt als je maximale kwaliteit wilt. Installeer alle bestanden en kies vervolgens de gewenste bestanden in S2S. De andere blijven op de schijf staan ​​voor wanneer u hardware upgradet of van werklast verandert. <strong>Uw eigen <code>.gguf</code>-bestanden</strong> verschijnen in dezelfde lijst zodra ze in <code>modellen</code> staan.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Kleinste &amp; snelste.</strong> Qwen3.5 in een klein formaat: geweldig als het VRAM beperkt is of als je onmiddellijke reacties wilt.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Sweet spot.</strong> Ministral-instructie-tuning met <strong>uitstekende meertalige dekking</strong> — het werkpaard dat de meeste mensen dagelijks gebruiken.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Zwaarste hitter.</strong> Qwen2.5 7B bij solide kwantisering: grijp hiernaar als je voldoende hoofdruimte hebt en de rijkste antwoorden wilt.",

    "llm_install_h": "📂 Installatie (duurt ongeveer een minuut)",
    "llm_install_highlight": "Plaats <strong>elk</strong> LLM-controlepunt <strong>alleen</strong> in de map <code>models</code> — <strong>niet</strong> in <code>models\\nllb</code> of een andere submap. Geldt voor onze bundel <strong>en</strong> alle andere <code>.gguf</code> die u toevoegt.",

    "llm_install_note": "Als S2S open was, sluit u het en opent u het opnieuw, zodat de nieuwe controlepunten in de modelkiezer verschijnen.",
    "llm_lic_note": "Elk gewichtsbestand blijft onder de <strong>originele open licentie</strong> vallen (bijvoorbeeld de voorwaarden van Apache&nbsp;2.0 of Mistral). U bent verantwoordelijk voor het gebruik ervan in overeenstemming met die licenties <strong>en</strong> met uw S2S-licentieniveau (persoonlijk versus commercieel). Geef bij twijfel de voorkeur aan de kleinere Qwen-controlepunten om te experimenteren en zorg ervoor dat de commerciële workflows op één lijn liggen met uw overeenkomst."
  }
,
  "SV": {
    "req_llm_dl": "Ladda ner LLM-filer (valfritt)",
    "req_llm_dl_v": "Ja (~8,1 GB en gång)",
    "dl_llm": "LLM-paket (3 GGUF-modeller)",
    "llm_title_inner": "Flerspråkigt LLM-paket (valfritt – tre .gguf-filer)",

    "llm_compat_h": "✅ Alla flerspråkiga LLM i <code>.gguf</code>-format",
    "llm_compat_p": "S2S Portable skannar mappen <code>models</code> efter <strong>.gguf</strong>-kontrollpunkter. Du är <strong>inte begränsad</strong> till vår trio: placera <strong>vilken flerspråkig LLM du föredrar</strong> där, så länge filen slutar på <strong>.gguf</strong> och ligger <strong>direkt i <code>modeller</code></strong> (inte i <code>nllb</code> eller någon undermapp). Välj en storlek som din GPU kan ladda. De tre filerna som listas längre ner är en <strong>utvald, testad startuppsättning</strong> — starka flerspråkiga instruktionsmodeller för resonemang, omformulering och extra språkhjälp bredvid din pipeline för talöversättning.",
    "llm_tip_h": "💡 Behöver jag alla tre på en gång?",
    "llm_tip_p": "<strong>Nej.</strong> Du får hela trion så att du kan <strong>välja den bästa passformen för din GPU</strong>: ett fjäderlätt alternativ för tight VRAM, en balanserad mellanstorleksmodell och en större kontrollpunkt när du vill ha maximal kvalitet. Installera alla filer och välj sedan den du vill ha i S2S — de andra stannar kvar på disken när du uppgraderar hårdvara eller byter arbetsbelastning. <strong>Dina egna <code>.gguf</code>-filer</strong> visas i samma lista när de finns i <code>modeller</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Minst &amp; snabbast.</strong> Qwen3.5 i ett litet fotavtryck: bra när VRAM är begränsat eller du vill ha omedelbara svar.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Sweet spot.</strong> Ministral instruktionsinställning med <strong>utmärkt flerspråkig täckning</strong> – arbetshästen som de flesta springer dagligen.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Tyngsta slagaren.</strong> Qwen2.5 7B vid solid kvantisering: nå efter detta när du har utrymme och vill ha de rikaste svaren.",

    "llm_install_h": "📂 Installation (tar ungefär en minut)",
    "llm_install_highlight": "Placera <strong>varje</strong> LLM-kontrollpunkt <strong>endast</strong> i mappen <code>models</code> - <strong>inte</strong> i <code>models\\nllb</code> eller någon annan undermapp. Gäller vårt paket <strong>och</strong> alla andra <code>.gguf</code> du lägger till.",

    "llm_install_note": "Om S2S var öppen, stäng och öppna den en gång så att de nya kontrollpunkterna dyker upp i modellväljaren.",
    "llm_lic_note": "Varje viktfil förblir under dess <strong>ursprungliga öppna licens</strong> (till exempel Apache&nbsp;2.0 eller Mistrals villkor). Du är ansvarig för att använda dem i linje med dessa licenser <strong>och</strong> med din S2S-licensnivå (personligt kontra kommersiellt). Om du är osäker, föredra de mindre Qwen-kontrollpunkterna för experiment och håll kommersiella arbetsflöden i linje med ditt avtal."
  }
,
  "DA": {
    "req_llm_dl": "Download af LLM-filer (valgfrit)",
    "req_llm_dl_v": "Ja (~8,1 GB én gang)",
    "dl_llm": "LLM-pakke (3 GGUF-modeller)",
    "llm_title_inner": "Flersproget LLM-pakke (valgfrit – tre .gguf-filer)",

    "llm_compat_h": "✅ Enhver flersproget LLM i <code>.gguf</code>-format",
    "llm_compat_p": "S2S Portable scanner mappen <code>models</code> for <strong>.gguf</strong> kontrolpunkter. Du er <strong>ikke begrænset</strong> til vores trio: placer <strong>hvad som helst flersproget LLM, du foretrækker</strong> der, så længe filen ender på <strong>.gguf</strong> og sidder <strong>direkte i <code>modeller</code></strong> (ikke i <code>nllb</code> eller nogen undermappe). Vælg en størrelse, din GPU kan indlæse. De tre filer, der er anført længere nede, er et <strong>kurateret, testet startsæt</strong> — stærke flersprogede instruktionsmodeller til ræsonnement, omformulering og ekstra sproghjælp ved siden af ​​din taleoversættelsespipeline.",
    "llm_tip_h": "💡 Skal jeg have alle tre på én gang?",
    "llm_tip_p": "<strong>Nej.</strong> Du får hele trioen, så du kan <strong>vælge den bedste pasform til din GPU</strong>: en fjerlet mulighed for stram VRAM, en afbalanceret model i mellemstørrelse og et større kontrolpunkt, når du vil have maksimal kvalitet. Installer alle filer, og vælg derefter den, du vil have i S2S – de andre bliver på disken, når du opgraderer hardware eller skifter arbejdsbelastning. <strong>Dine egne <code>.gguf</code>-filer</strong> vises på den samme liste, når de er placeret i <code>modeller</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Mindste &amp; hurtigst.</strong> Qwen3.5 i et lille fodaftryk: fantastisk, når VRAM er begrænset, eller du vil have øjeblikkelige svar.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Sweet spot.</strong> Ministral instruktionsjustering med <strong>fremragende flersproget dækning</strong> - den arbejdshest, de fleste mennesker løber fra dag til dag.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Sværeste hitter.</strong> Qwen2.5 7B ved solid kvantisering: nå efter dette, når du har frihøjde og vil have de rigeste svar.",

    "llm_install_h": "📂 Installation (tager cirka et minut)",
    "llm_install_highlight": "Placer <strong>hvert</strong> LLM-kontrolpunkt <strong>kun</strong> i mappen <code>models</code> - <strong>ikke</strong> i <code>models\\nllb</code> eller nogen anden undermappe. Gælder for vores bundle <strong>og</strong> enhver anden <code>.gguf</code> du tilføjer.",

    "llm_install_note": "Hvis S2S var åben, skal du lukke og genåbne den én gang, så de nye kontrolpunkter dukker op i modelvælgeren.",
    "llm_lic_note": "Hver vægtfil forbliver under dens <strong>oprindelige åbne licens</strong> (for eksempel Apache&nbsp;2.0 eller Mistrals vilkår). Du er ansvarlig for at bruge dem i overensstemmelse med disse licenser <strong>og</strong> med dit S2S-licensniveau (personligt kontra kommercielt). Når du er i tvivl, så foretræk de mindre Qwen-checkpoints til eksperimentering og hold kommercielle arbejdsgange i overensstemmelse med din aftale."
  }
,
  "NO": {
    "req_llm_dl": "Laste ned LLM-filer (valgfritt)",
    "req_llm_dl_v": "Ja (~8,1 GB en gang)",
    "dl_llm": "LLM-pakke (3 GGUF-modeller)",
    "llm_title_inner": "Flerspråklig LLM-pakke (valgfritt – tre .gguf-filer)",

    "llm_compat_h": "✅ Enhver flerspråklig LLM i <code>.gguf</code>-format",
    "llm_compat_p": "S2S Portable skanner mappen <code>modeller</code> etter <strong>.gguf</strong>-sjekkpunkter. Du er <strong>ikke begrenset</strong> til vår trio: Plasser <strong>den flerspråklige LLM du foretrekker</strong> der, så lenge filen ender på <strong>.gguf</strong> og ligger <strong>direkte i <code>modeller</code></strong> (ikke i <code>nllb</code> eller noen undermappe). Velg en størrelse GPUen din kan laste. De tre filene som er oppført lenger ned er et <strong>kuratert, testet startsett</strong> – sterke flerspråklige instruksjonsmodeller for resonnement, omformulering og ekstra språkhjelp ved siden av din taleoversettelsespipeline.",
    "llm_tip_h": "💡 Trenger jeg alle tre samtidig?",
    "llm_tip_p": "<strong>Nei.</strong> Du får hele trioen slik at du kan <strong>velge den beste passformen for din GPU</strong>: et fjærvekt alternativ for tett VRAM, en balansert mellomstørrelsesmodell og et større kontrollpunkt når du vil ha maksimal kvalitet. Installer alle filene, og velg den du vil ha inne i S2S – de andre forblir på disken når du oppgraderer maskinvare eller bytter arbeidsmengde. <strong>Dine egne <code>.gguf</code>-filer</strong> vises i samme liste når de er plassert i <code>modeller</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Minste &amp; raskest.</strong> Qwen3.5 i et lite fotavtrykk: flott når VRAM er begrenset eller du vil ha øyeblikkelig respons.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Sweet spot.</strong> Ministral instruksjonsinnstilling med <strong>utmerket flerspråklig dekning</strong> – arbeidshesten de fleste løper fra dag til dag.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Tyngste slageren.</strong> Qwen2.5 7B ved solid kvantisering: nå etter dette når du har takhøyde og vil ha de rikeste svarene.",

    "llm_install_h": "📂 Installasjon (tar omtrent ett minutt)",
    "llm_install_highlight": "Plasser <strong>hvert</strong> LLM-sjekkpunkt <strong>bare</strong> i mappen <code>modeller</code> – <strong>ikke</strong> i <code>modeller\\nllb</code> eller noen annen undermappe. Gjelder pakken vår <strong>og</strong> alle andre <code>.gguf</code> du legger til.",

    "llm_install_note": "Hvis S2S var åpen, lukk og åpne den en gang så de nye sjekkpunktene vises i modellvelgeren.",
    "llm_lic_note": "Hver vektfil forblir under sin <strong>opprinnelige åpne lisens</strong> (for eksempel Apache&nbsp;2.0 eller Mistrals vilkår). Du er ansvarlig for å bruke dem i tråd med disse lisensene <strong>og</strong> med S2S-lisensnivået ditt (personlig vs kommersiell). Når du er i tvil, foretrekk de mindre Qwen-sjekkpunktene for eksperimentering og hold kommersielle arbeidsflyter på linje med avtalen din."
  }
,
  "FI": {
    "req_llm_dl": "LLM-tiedostojen lataaminen (valinnainen)",
    "req_llm_dl_v": "Kyllä (~8,1 Gt kertaluonteisesti)",
    "dl_llm": "LLM-paketti (3 GGUF-mallia)",
    "llm_title_inner": "Monikielinen LLM-paketti (valinnainen – kolme .gguf-tiedostoa)",

    "llm_compat_h": "✅ Mikä tahansa monikielinen LLM <code>.gguf</code>-muodossa",
    "llm_compat_p": "S2S Portable etsii <code>models</code>-kansiosta <strong>.gguf</strong>-tarkistuspisteitä. Et ole <strong>rajoittunut</strong> kolmikkoomme: sijoita <strong>mikä tahansa monikielinen LLM, jonka haluat</strong>, kunhan tiedosto päättyy <strong>.gguf</strong>-tiedostoon ja sijaitsee <strong>suoraan <code>malleja</code></strong>-kansiossa (ei sisällä <code>nllb</code> tai missä tahansa alikansiossa). Valitse koko, jonka GPU voi ladata. Kolme jäljempänä lueteltua tiedostoa ovat <strong>kuroitu, testattu aloitusjoukko</strong> – vahvat monikieliset ohjemallit päättelyyn, uudelleenmuotoiluun ja ylimääräiseen kieliapuun puheenkäännösputken vieressä.",
    "llm_tip_h": "💡 Tarvitsenko kaikki kolme kerralla?",
    "llm_tip_p": "<strong>Ei.</strong> Saat täyden kolmion, jotta voit <strong>valita GPU:llesi parhaiten sopivan</strong>: höyhenpainoinen vaihtoehto tiukkaan VRAM-muistiin, tasapainoinen keskikokoinen malli ja suurempi tarkistuspiste, kun haluat parhaan mahdollisen laadun. Asenna kaikki tiedostot ja valitse sitten haluamasi S2S:n sisällä – muut pysyvät levyllä, kun päivität laitteistoa tai vaihdat työkuormaa. <strong>Omat <code>.gguf</code>-tiedostosi</strong> näkyvät samassa luettelossa, kun ne ovat <code>malleissa</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> – <strong>Pienin &amp; nopein.</strong> Qwen3.5 pienellä jalanjäljellä: loistava, kun VRAM-muistia on rajoitettu tai haluat välittömiä vastauksia.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> – <strong>Sweet spot.</strong> Ministeriön ohjeistus <strong>erinomainen monikielinen kattavuus</strong> – työhevonen, jota useimmat ihmiset juoksevat päivittäin.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> – <strong>Raskain osuma.</strong> Qwen2.5 7B vakaalla kvantisoinnilla: tavoita tämä, kun sinulla on varaa ja haluat monipuolisimmat vastaukset.",

    "llm_install_h": "📂 Asennus (kestää noin minuutin)",
    "llm_install_highlight": "Aseta <strong>jokainen</strong> LLM-tarkistuspiste <strong>vain</strong> <code>models</code>-kansioon – <strong>älä</strong> <code>models\\nllb</code>- tai mihinkään muuhun alikansioon. Koskee nippuamme <strong>ja</strong> kaikkia muita lisäämiäsi <code>.gguf</code>-tiedostoja.",

    "llm_install_note": "Jos S2S oli auki, sulje ja avaa se uudelleen kerran, jotta uudet tarkistuspisteet näkyvät mallivalitsimessa.",
    "llm_lic_note": "Jokainen painotiedosto säilyy <strong>alkuperäisen avoimen lisenssinsä</strong> alaisena (esimerkiksi Apache&nbsp;2.0 tai Mistralin ehdot). Olet vastuussa niiden käyttämisestä näiden lisenssien <strong>ja</strong> S2S-lisenssitasosi (henkilökohtainen vs. kaupallinen) mukaisesti. Jos olet epävarma, käytä pienempiä Qwen-tarkastuspisteitä kokeilua varten ja pidä kaupalliset työnkulut sopimuksesi mukaisina."
  }
,
  "CS": {
    "req_llm_dl": "Stahování souborů LLM (volitelné)",
    "req_llm_dl_v": "Ano (~8,1 GB jednorázově)",
    "dl_llm": "LLM pack (3 modely GGUF)",
    "llm_title_inner": "Vícejazyčný balíček LLM (volitelné – tři soubory .gguf)",

    "llm_compat_h": "✅ Jakýkoli vícejazyčný LLM ve formátu <code>.gguf</code>",
    "llm_compat_p": "S2S Portable prohledá složku <code>models</code> a vyhledá kontrolní body <strong>.gguf</strong>. <strong>Nejste omezeni</strong> na naši trojici: umístěte tam <strong>jakýkoli vícejazyčný LLM, který preferujete</strong>, pokud soubor končí příponou <strong>.gguf</strong> a je umístěn <strong>přímo v <code>models</code></strong> (nikoli v <code>nllb</code> ani v žádné podsložce). Vyberte velikost, kterou může GPU načíst. Tři soubory uvedené níže jsou <strong>spravovanou a testovanou počáteční sadou</strong> – silné vícejazyčné modely instrukcí pro uvažování, přeformulování a další jazykovou nápovědu vedle kanálu překladu řeči.",
    "llm_tip_h": "💡 Potřebuji všechny tři najednou?",
    "llm_tip_p": "<strong>Ne.</strong> Získáte celou trojici, takže si můžete <strong>vybrat to, co nejlépe vyhovuje vašemu GPU</strong>: lehká varianta pro těsné VRAM, vyvážený model střední velikosti a větší kontrolní bod, když chcete maximální kvalitu. Nainstalujte všechny soubory a poté vyberte ten, který chcete v S2S – ostatní zůstanou na disku, když upgradujete hardware nebo změníte pracovní zátěž. <strong>Vaše vlastní soubory <code>.gguf</code></strong> se objeví ve stejném seznamu, jakmile jsou umístěny v <code>modelech</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Nejmenší &amp; nejrychlejší.</strong> Qwen3.5 na malé ploše: skvělé, když je omezená paměť VRAM nebo chcete okamžité odezvy.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Super spot.</strong> Ladění ministrů instruct s <strong>vynikajícím vícejazyčným pokrytím</strong> – tažný kůň, který většina lidí denně provozuje.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Nejtěžší úderník.</strong> Qwen2.5 7B při solidní kvantizaci: sáhněte po tomto, když máte dostatek prostoru a chcete nejbohatší odpovědi.",

    "llm_install_h": "📂 Instalace (trvá asi minutu)",
    "llm_install_highlight": "Vložte <strong>každý</strong> kontrolní bod LLM <strong>pouze</strong> do složky <code>models</code> — <strong>ne</strong> do <code>models\\nllb</code> ani do žádné jiné podsložky. Platí pro náš balíček <strong>a</strong> jakýkoli jiný <code>.gguf</code>, který přidáte.",

    "llm_install_note": "Pokud byl S2S otevřený, jednou jej zavřete a znovu otevřete, aby se nové kontrolní body zobrazily ve výběru modelu.",
    "llm_lic_note": "Každý soubor váhy zůstává pod <strong>původní otevřenou licencí</strong> (například Apache&nbsp;2.0 nebo podmínky Mistral). Jste odpovědní za jejich používání v souladu s těmito licencemi <strong>a</strong> s vaší úrovní licencí S2S (osobní vs. komerční). V případě pochybností dejte přednost menším kontrolním bodům Qwen pro experimentování a udržujte komerční pracovní postupy v souladu s vaší dohodou."
  }
,
  "SK": {
    "req_llm_dl": "Sťahovanie súborov LLM (voliteľné)",
    "req_llm_dl_v": "Áno (~8,1 GB jednorazovo)",
    "dl_llm": "Balík LLM (3 modely GGUF)",
    "llm_title_inner": "Viacjazyčný balík LLM (voliteľné – tri súbory .gguf)",

    "llm_compat_h": "✅ Akýkoľvek viacjazyčný LLM vo formáte <code>.gguf</code>",
    "llm_compat_p": "S2S Portable prehľadá priečinok <code>models</code>, či neobsahuje kontrolné body <strong>.gguf</strong>. <strong>Nie ste obmedzení</strong> na našu trojicu: umiestnite tam <strong>akýkoľvek viacjazyčný LLM, ktorý uprednostňujete</strong>, pokiaľ súbor končí príponou <strong>.gguf</strong> a nachádza sa <strong>priamo v <code>modeloch</code></strong> (nie v <code>nllb</code> ani v žiadnom podpriečinku). Vyberte veľkosť, ktorú dokáže načítať váš GPU. Tri súbory uvedené nižšie sú <strong>spravovanou a testovanou štartovacou súpravou</strong> – silné viacjazyčné modely pokynov na uvažovanie, preformulovanie a ďalšiu jazykovú pomoc vedľa vášho kanála prekladu reči.",
    "llm_tip_h": "💡 Potrebujem všetky tri naraz?",
    "llm_tip_p": "<strong>Nie.</strong> Získate kompletnú trojicu, takže si môžete <strong>vybrať to, čo najlepšie vyhovuje vášmu GPU</strong>: ľahšia možnosť pre tesnú pamäť VRAM, vyvážený model strednej veľkosti a väčší kontrolný bod, keď chcete maximálnu kvalitu. Nainštalujte všetky súbory a potom vyberte ten, ktorý chcete v S2S – ostatné zostanú na disku, keď upgradujete hardvér alebo zmeníte pracovné zaťaženie. <strong>Vaše vlastné súbory <code>.gguf</code></strong> sa zobrazia v rovnakom zozname, keď sa umiestnia do <code>modelov</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Najmenší &amp; najrýchlejší.</strong> Qwen3.5 na malom pôdoryse: skvelé, keď je VRAM obmedzená alebo ak chcete okamžité reakcie.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Skvelé miesto.</strong> Ladenie ministerských inštrukcií s <strong>excelentným viacjazyčným pokrytím</strong> – ťažný kôň, ktorý väčšina ľudí každodenne používa.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Najťažší úderník.</strong> Qwen2.5 7B pri solídnej kvantizácii: siahnite po tomto, keď máte priestor a chcete najbohatšie odpovede.",

    "llm_install_h": "📂 Inštalácia (trvá asi minútu)",
    "llm_install_highlight": "Umiestnite <strong>každý</strong> kontrolný bod LLM <strong>iba</strong> do priečinka <code>models</code> — <strong>nie</strong> do <code>models\\nllb</code> ani do iného podpriečinka. Vzťahuje sa na náš balík <strong>a</strong> akýkoľvek iný <code>.gguf</code>, ktorý pridáte.",

    "llm_install_note": "Ak bol S2S otvorený, raz ho zatvorte a znova otvorte, aby sa nové kontrolné body zobrazili vo výbere modelu.",
    "llm_lic_note": "Každý súbor hmotnosti zostáva pod <strong>pôvodnou otvorenou licenciou</strong> (napríklad Apache&nbsp;2.0 alebo podmienky Mistral). Zodpovedáte za ich používanie v súlade s týmito licenciami <strong>a</strong> s vašou úrovňou licencií S2S (osobné vs. komerčné). Ak máte pochybnosti, uprednostnite na experimentovanie menšie kontrolné body Qwen a udržujte komerčné pracovné postupy v súlade s vašou dohodou."
  }
,
  "RO": {
    "req_llm_dl": "Descărcarea fișierelor LLM (opțional)",
    "req_llm_dl_v": "Da (~8,1 GB o singură dată)",
    "dl_llm": "Pachet LLM (3 modele GGUF)",
    "llm_title_inner": "Pachet LLM multilingv (Opțional – Trei fișiere .gguf)",

    "llm_compat_h": "✅ Orice LLM multilingv în format <code>.gguf</code>",
    "llm_compat_p": "S2S Portable scanează folderul <code>modele</code> pentru puncte de control <strong>.gguf</strong>. <strong>Nu sunteți limitat</strong> la trio-ul nostru: plasați acolo <strong>orice LLM multilingv preferați</strong>, atâta timp cât fișierul se termină în <strong>.gguf</strong> și se află <strong>direct în <code>modele</code></strong> (nu în <code>nllb</code> sau în orice subdosar). Alegeți o dimensiune pe care o poate încărca GPU-ul dvs. Cele trei fișiere enumerate mai jos sunt un <strong>set de pornire amenajat, testat</strong> — modele puternice de instrucțiuni multilingve pentru raționament, reformulare și ajutor suplimentar în limbaj, alături de canalul dvs. de traducere a vorbirii.",
    "llm_tip_h": "💡 Am nevoie de toate trei deodată?",
    "llm_tip_p": "<strong>Nu.</strong> Primești trio complet, astfel încât să poți <strong>alege cea mai bună potrivire pentru GPU-ul tău</strong>: o opțiune ușoară pentru VRAM strâns, un model echilibrat de dimensiuni medii și un punct de control mai mare atunci când vrei calitate maximă. Instalați toate fișierele, apoi alegeți-l pe cel pe care îl doriți în S2S — celelalte rămân pe disc atunci când faceți upgrade hardware sau schimbați sarcinile de lucru. <strong>Propriile fișiere <code>.gguf</code></strong> apar în aceeași listă odată ce se află în <code>modele</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Cel mai mic și amp; cel mai rapid.</strong> Qwen3.5 într-o amprentă mică: excelent atunci când VRAM este limitată sau doriți răspunsuri instantanee.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Locul plăcut.</strong> Reglajul Ministral instruct cu <strong>acoperire multilingvă excelentă</strong> — calul de muncă pe care majoritatea oamenilor o aleargă zi de zi.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Cea mai puternică lovitură.</strong> Qwen2.5 7B la cuantizare solidă: atingeți acest lucru atunci când aveți spațiu liber și doriți cele mai bogate răspunsuri.",

    "llm_install_h": "📂 Instalare (durează aproximativ un minut)",
    "llm_install_highlight": "Puneți <strong>fiecare</strong> punct de control LLM <strong>numai</strong> în dosarul <code>modele</code> — <strong>nu</strong> în <code>modele\\nllb</code> sau în orice alt subdosar. Se aplică pachetului nostru <strong>și</strong> orice alt <code>.gguf</code> pe care îl adăugați.",

    "llm_install_note": "Dacă S2S a fost deschis, închideți-l și redeschideți-l o dată, astfel încât noile puncte de control să apară în selectorul de modele.",
    "llm_lic_note": "Fiecare fișier de greutate rămâne sub <strong>licența deschisă originală</strong> (de exemplu, Apache&nbsp;2.0 sau termenii Mistral). Sunteți responsabil pentru utilizarea acestora în conformitate cu acele licențe <strong>și</strong> cu nivelul dvs. de licență S2S (personal vs comercial). Când aveți îndoieli, preferați punctele de control Qwen mai mici pentru experimentare și mențineți fluxurile de lucru comerciale aliniate cu acordul dvs."
  }
,
  "HU": {
    "req_llm_dl": "LLM-fájlok letöltése (opcionális)",
    "req_llm_dl_v": "Igen (~8,1 GB egyszeri)",
    "dl_llm": "LLM csomag (3 GGUF modell)",
    "llm_title_inner": "Többnyelvű LLM-csomag (opcionális – három .gguf fájl)",

    "llm_compat_h": "✅ Bármilyen többnyelvű LLM <code>.gguf</code> formátumban",
    "llm_compat_p": "Az S2S Portable a <code>models</code> mappában keresi a <strong>.gguf</strong> ellenőrzőpontokat. Ön <strong>nem korlátozódik</strong> hármasunkra: <strong>olyan többnyelvű LLM-et helyezzen el, amelyet szeretne</strong>, amennyiben a fájl <strong>.gguf</strong> végződésű, és <strong>közvetlenül a <code>models</code></strong> mappában található (nem az <code>nllb</code> vagy bármely almappában). Válassza ki a GPU által betölthető méretet. A lejjebb felsorolt ​​három fájl egy <strong>kurált, tesztelt kezdőkészlet</strong> – erős többnyelvű utasításmodellek az érveléshez, az újrafogalmazáshoz és a beszédfordítási folyamat melletti extra nyelvi segítséghez.",
    "llm_tip_h": "💡 Kell mindhárom egyszerre?",
    "llm_tip_p": "<strong>Nem.</strong> Ön megkapja a teljes hármast, így <strong>kiválaszthatja a GPU-jához legjobban illőt</strong>: pehelysúlyú opció szűk VRAM-hoz, kiegyensúlyozott közepes méretű modell, és nagyobb ellenőrzőpont, ha a legjobb minőséget szeretné elérni. Telepítse az összes fájlt, majd válassza ki a kívántat az S2S-ben – a többi a hardver frissítése vagy a munkaterhelés váltása során a lemezen marad. <strong>Saját <code>.gguf</code>-fájljai</strong> ugyanabban a listában jelennek meg, miután <code>modellekben</code> vannak.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> – <strong>Legkisebb és amp; a leggyorsabb.</strong> A Qwen3.5 kis méretben: nagyszerű, ha korlátozott a VRAM, vagy azonnali válaszokat szeretne.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> – <strong>Sweet spot.</strong> Miniszteri instrukciók hangolása <strong>kiváló többnyelvű lefedettséggel</strong> – a legtöbb ember által nap mint nap futott igásló.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> – <strong>Legnehezebb ütés.</strong> Qwen2.5 7B szilárd kvantálásnál: nyúljon ehhez, ha van mozgástér, és a leggazdagabb válaszokat szeretné.",

    "llm_install_h": "📂 Telepítés (körülbelül egy percet vesz igénybe)",
    "llm_install_highlight": "Helyezzen <strong>minden</strong> LLM-ellenőrző pontot <strong>csak</strong> a <code>models</code> mappába – <strong>ne</strong> a <code>models\\nllb</code> vagy bármely más almappába. A csomagunkra <strong>és</strong> vonatkozik az Ön által hozzáadott bármely más <code>.gguf</code> fájlra.",

    "llm_install_note": "Ha az S2S nyitva volt, zárja be, majd nyissa újra egyszer, hogy az új ellenőrzőpontok megjelenjenek a modellválasztóban.",
    "llm_lic_note": "Minden súlyfájl az <strong>eredeti nyílt licence</strong> alatt marad (például az Apache&nbsp;2.0 vagy a Mistral feltételei). Ön felelős azért, hogy ezeket a licencekkel összhangban <strong>és</strong> az S2S-licenc szintjével (személyes vagy kereskedelmi) használja. Ha kétségei vannak, részesítse előnyben a kisebb Qwen-ellenőrző pontokat a kísérletezéshez, és tartsa a kereskedelmi munkafolyamatokat összhangban a megállapodással."
  }
,
  "EL": {
    "req_llm_dl": "Λήψη αρχείων LLM (προαιρετικό)",
    "req_llm_dl_v": "Ναι (~8,1 GB εφάπαξ)",
    "dl_llm": "Πακέτο LLM (3 μοντέλα GGUF)",
    "llm_title_inner": "Πολύγλωσσο Πακέτο LLM (Προαιρετικό — Τρία αρχεία .gguf)",

    "llm_compat_h": "✅ Οποιοδήποτε πολύγλωσσο LLM σε μορφή <code>.gguf</code>",
    "llm_compat_p": "Το S2S Portable σαρώνει το φάκελο <code>models</code> για σημεία ελέγχου <strong>.gguf</strong>. <strong>Δεν περιορίζεστε</strong> στο τρίο μας: τοποθετήστε <strong>όποιο πολύγλωσσο LLM προτιμάτε</strong> εκεί, αρκεί το αρχείο να τελειώνει σε <strong>.gguf</strong> και να βρίσκεται <strong>απευθείας σε <code>μοντέλα</code></strong> (όχι μέσα στο <code>nllb</code> ή σε οποιονδήποτε υποφάκελο). Επιλέξτε ένα μέγεθος που μπορεί να φορτώσει η GPU σας. Τα τρία αρχεία που παρατίθενται παρακάτω είναι ένα <strong>επιμελημένο, δοκιμασμένο σετ εκκίνησης</strong> — ισχυρά μοντέλα πολύγλωσσων οδηγιών για συλλογισμό, αναδιατύπωση και επιπλέον γλωσσική βοήθεια δίπλα στη γραμμή μετάφρασης της ομιλίας σας.",
    "llm_tip_h": "💡 Χρειάζομαι και τα τρία ταυτόχρονα;",
    "llm_tip_p": "<strong>Όχι.</strong> Παίρνετε την πλήρη τριάδα, ώστε να μπορείτε να <strong>επιλέξετε την καλύτερη εφαρμογή για τη GPU σας</strong>: μια ελαφριά επιλογή για σφιχτή VRAM, ένα ισορροπημένο μοντέλο μεσαίου μεγέθους και ένα μεγαλύτερο σημείο ελέγχου όταν θέλετε τη μέγιστη ποιότητα. Εγκαταστήστε όλα τα αρχεία και, στη συνέχεια, επιλέξτε αυτό που θέλετε μέσα στο S2S — τα άλλα παραμένουν στο δίσκο για την αναβάθμιση υλικού ή την αλλαγή φόρτου εργασίας. Τα <strong>Τα δικά σας αρχεία <code>.gguf</code></strong> εμφανίζονται στην ίδια λίστα μόλις τοποθετηθούν στα <code>μοντέλα</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Μικρότερο &amp; ταχύτερο.</strong> Το Qwen3.5 σε μικρό αποτύπωμα: εξαιρετικό όταν η VRAM είναι περιορισμένη ή θέλετε άμεσες αποκρίσεις.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Γλυκό σημείο.</strong> Συντονισμός υπουργικών εντολών με <strong>εξαιρετική πολυγλωσσική κάλυψη</strong> — το άλογο που οι περισσότεροι άνθρωποι τρέχουν καθημερινά.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Το πιο βαρύ χτύπημα.</strong> Qwen2.5 7B σε σταθερή κβαντοποίηση: προσεγγίστε αυτό όταν έχετε ελεύθερο χώρο και θέλετε τις πιο πλούσιες απαντήσεις.",

    "llm_install_h": "📂 Εγκατάσταση (διαρκεί περίπου ένα λεπτό)",
    "llm_install_highlight": "Τοποθετήστε <strong>κάθε</strong> σημείο ελέγχου LLM <strong>μόνο</strong> στον φάκελο <code>models</code> — <strong>όχι</strong> μέσα στο <code>models\\nllb</code> ή σε οποιονδήποτε άλλο υποφάκελο. Ισχύει για το πακέτο μας <strong>και</strong> οποιοδήποτε άλλο <code>.gguf</code> προσθέσετε.",

    "llm_install_note": "Εάν το S2S ήταν ανοιχτό, κλείστε το και ανοίξτε το ξανά μία φορά, ώστε τα νέα σημεία ελέγχου να εμφανιστούν στον επιλογέα μοντέλου.",
    "llm_lic_note": "Κάθε αρχείο βάρους παραμένει υπό την <strong>αρχική ανοιχτή άδεια</strong> του (για παράδειγμα Apache&nbsp;2.0 ή όρους του Mistral). Είστε υπεύθυνοι για τη χρήση τους σύμφωνα με αυτές τις άδειες <strong>και</strong> με το επίπεδο άδειας χρήσης S2S (προσωπική έναντι εμπορικής). Σε περίπτωση αμφιβολίας, προτιμήστε τα μικρότερα σημεία ελέγχου Qwen για πειραματισμούς και διατηρήστε τις εμπορικές ροές εργασίας ευθυγραμμισμένες με τη συμφωνία σας."
  }
,
  "TR": {
    "req_llm_dl": "LLM dosyalarını indirme (isteğe bağlı)",
    "req_llm_dl_v": "Evet (~8,1 GB tek seferlik)",
    "dl_llm": "LLM paketi (3 GGUF modeli)",
    "llm_title_inner": "Çok Dilli LLM Paketi (İsteğe Bağlı — Üç .gguf Dosyası)",

    "llm_compat_h": "✅ <code>.gguf</code> formatında çok dilli herhangi bir LLM",
    "llm_compat_p": "S2S Portable, <strong>.gguf</strong> kontrol noktaları için <code>models</code> klasörünü tarar. Üçlümüzle <strong>sınırlı değilsiniz</strong>: Dosya <strong>.gguf</strong> ile bittiği ve <strong>doğrudan <code>models</code></strong> içinde yer aldığı (<code>nllb</code> veya herhangi bir alt klasörün içinde olmadığı) sürece <strong>tercih ettiğiniz çok dilli LLM'yi</strong> oraya yerleştirin. GPU'nuzun yükleyebileceği bir boyut seçin. Aşağıda listelenen üç dosya, <strong>seçilmiş, test edilmiş bir başlangıç ​​setidir</strong>; muhakeme etme, yeniden ifade etme ve konuşma çevirisi hattınızın yanında ekstra dil yardımı için güçlü çok dilli öğretim modelleri.",
    "llm_tip_h": "💡Üçüne aynı anda mı ihtiyacım var?",
    "llm_tip_p": "<strong>Hayır.</strong> Tam üçlüyü alırsınız, böylece <strong>GPU'nuz için en uygun olanı seçebilirsiniz</strong>: sıkı VRAM için tüy kadar hafif bir seçenek, dengeli bir orta boy model ve maksimum kalite istediğinizde daha büyük bir kontrol noktası. Tüm dosyaları yükleyin, ardından S2S içinde istediğiniz dosyayı seçin; diğerleri, donanımı yükselttiğinizde veya iş yükü değiştirdiğinizde kullanılmak üzere diskte kalır. <strong>Kendi <code>.gguf</code> dosyalarınız</strong>, <code>models</code>'e yerleştirildiklerinde aynı listede görünür.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>En küçük veamp; en hızlısı.</strong> Küçük bir alanda Qwen3.5: VRAM sınırlı olduğunda veya anında yanıt almak istediğinizde harikadır.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Güzel nokta.</strong> <strong>Mükemmel çok dilli kapsama</strong> ile ministral talimat ayarı — çoğu insanın her gün çalıştırdığı en güçlü iş.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>En ağır vurucu.</strong> Sağlam nicelemede Qwen2.5 7B: Yeterli alanınız olduğunda ve en zengin yanıtları istediğinizde buna ulaşın.",

    "llm_install_h": "📂 Kurulum (yaklaşık bir dakika sürer)",
    "llm_install_highlight": "<strong>Her</strong> LLM denetim noktasını <strong>yalnızca</strong> <code>models</code> klasörüne koyun; <code>models\\nllb</code> veya başka bir alt klasöre <strong>değil</strong>. Paketimiz <strong>ve</strong> eklediğiniz diğer <code>.gguf</code> için geçerlidir.",

    "llm_install_note": "S2S açıksa, model seçicide yeni kontrol noktalarının görünmesi için onu bir kez kapatıp yeniden açın.",
    "llm_lic_note": "Her ağırlık dosyası kendi <strong>orijinal açık lisansı</strong> kapsamında kalır (örneğin Apache&nbsp;2.0 veya Mistral'ın koşulları). Bunları bu lisanslara <strong>ve</strong> S2S lisans katmanınıza (kişisel veya ticari) uygun olarak kullanmak sizin sorumluluğunuzdadır. Şüpheye düştüğünüzde deneme için daha küçük Qwen kontrol noktalarını tercih edin ve ticari iş akışlarını anlaşmanıza uygun tutun."
  }
,
  "AR": {
    "req_llm_dl": "تنزيل ملفات LLM (اختياري)",
    "req_llm_dl_v": "نعم (~8.1 جيجابايت لمرة واحدة)",
    "dl_llm": "حزمة LLM (3 نماذج GGUF)",
    "llm_title_inner": "حزمة LLM متعددة اللغات (اختياري — ثلاثة ملفات .gguf)",

    "llm_compat_h": "✅ أي ماجستير في القانون متعدد اللغات بتنسيق <code>.gguf</code>",
    "llm_compat_p": "يقوم S2S Portable بفحص المجلد <code>models</code> بحثًا عن نقاط فحص <strong>.gguf</strong>. أنت <strong>غير مقيد</strong> بالثلاثي لدينا: ضع <strong>ما تفضله من LLM متعدد اللغات</strong> هناك، طالما أن الملف ينتهي بـ <strong>.gguf</strong> ويوجد <strong>مباشرة في <code>models</code></strong> (وليس داخل <code>nllb</code> أو أي مجلد فرعي). اختر حجمًا يمكن لوحدة معالجة الرسومات الخاصة بك تحميله. الملفات الثلاثة المدرجة في الأسفل هي <strong>مجموعة بداية منسقة ومختبرة</strong> - نماذج تعليمات قوية متعددة اللغات للاستدلال وإعادة الصياغة ومساعدة لغوية إضافية بجانب مسار ترجمة الكلام الخاص بك.",
    "llm_tip_h": "💡 هل أحتاج إلى الثلاثة في وقت واحد؟",
    "llm_tip_p": "<strong>لا.</strong> يمكنك الحصول على الثلاثي الكامل حتى تتمكن من <strong>اختيار أفضل ما يناسب وحدة معالجة الرسومات الخاصة بك</strong>: خيار خفيف الوزن لذاكرة VRAM ضيقة، ونموذج متوسط ​​الحجم متوازن، ونقطة تفتيش أكبر عندما تريد أقصى قدر من الجودة. قم بتثبيت جميع الملفات، ثم اختر الملف الذي تريده داخل S2S - وتبقى الملفات الأخرى على القرص عند ترقية الأجهزة أو تبديل أحمال العمل. <strong>تظهر ملفات <code>.gguf</code> الخاصة بك</strong> في نفس القائمة بمجرد وجودها في <code>النماذج</code>.",

    "llm_f1": "<code style=\"color:var(--accent- Secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>الأصغر &amp; الأسرع.</strong> Qwen3.5 بحجم صغير: رائع عندما تكون ذاكرة VRAM محدودة أو عندما تريد استجابات فورية.",
    "llm_f2": "<code style=\"color:var(--accent- Secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>مكان رائع.</strong> ضبط تعليمات Ministral مع <strong>تغطية ممتازة متعددة اللغات</strong> — وهو العمود الفقري الذي يمارسه معظم الأشخاص يومًا بعد يوم.",
    "llm_f3": "<code style=\"color:var(--accent- Secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>أثقل ضارب.</strong> Qwen2.5 7B عند القياس الكمي القوي: يمكنك الوصول إلى هذا عندما يكون لديك مساحة كبيرة وتريد الحصول على أغنى الإجابات.",

    "llm_install_h": "📂 التثبيت (يستغرق حوالي دقيقة)",
    "llm_install_highlight": "ضع <strong>كل</strong> نقطة تفتيش LLM <strong>فقط</strong> في مجلد <code>models</code> - <strong>ليس</strong> داخل <code>models\\nllb</code> أو أي مجلد فرعي آخر. ينطبق على حزمتنا <strong>و</strong> أي <code>.gguf</code> آخر تضيفه.",

    "llm_install_note": "إذا كان S2S مفتوحًا، فأغلقه وأعد فتحه مرة واحدة حتى تظهر نقاط التحقق الجديدة في منتقي النموذج.",
    "llm_lic_note": "يظل كل ملف وزن خاضعًا <strong>للترخيص المفتوح الأصلي</strong> (على سبيل المثال، شروط Apache&nbsp;2.0 أو Mistral). أنت مسؤول عن استخدامها بما يتماشى مع هذه التراخيص <strong>و</strong> مع طبقة ترخيص S2S (الشخصي مقابل التجاري). عندما تكون في شك، قم بتفضيل نقاط تفتيش Qwen الأصغر حجمًا للتجريب وحافظ على توافق سير العمل التجاري مع اتفاقيتك."
  }
,
  "VI": {
    "req_llm_dl": "Tải xuống tệp LLM (tùy chọn)",
    "req_llm_dl_v": "Có (~8,1 GB một lần)",
    "dl_llm": "Gói LLM (3 mẫu GGUF)",
    "llm_title_inner": "Gói LLM đa ngôn ngữ (Tùy chọn - Ba tệp .gguf)",

    "llm_compat_h": "✅ Bất kỳ LLM đa ngôn ngữ nào ở định dạng <code>.gguf</code>",
    "llm_compat_p": "S2S Portable quét thư mục <code>models</code> để tìm các điểm kiểm tra <strong>.gguf</strong>. Bạn <strong>không bị giới hạn</strong> đối với bộ ba của chúng tôi: đặt <strong>bất kỳ LLM đa ngôn ngữ nào bạn thích</strong> ở đó, miễn là tệp kết thúc bằng <strong>.gguf</strong> và nằm <strong>trực tiếp trong <code>mô hình</code></strong> (không phải bên trong <code>nllb</code> hoặc bất kỳ thư mục con nào). Chọn kích thước GPU của bạn có thể tải. Ba tệp được liệt kê phía dưới là <strong>bộ khởi đầu đã được kiểm tra và tuyển chọn</strong> — các mô hình hướng dẫn đa ngôn ngữ mạnh mẽ dành cho lý luận, diễn đạt lại và trợ giúp ngôn ngữ bổ sung bên cạnh quy trình dịch giọng nói của bạn.",
    "llm_tip_h": "💡 Tôi có cần cả ba cùng một lúc không?",
    "llm_tip_p": "<strong>Không.</strong> Bạn có được bộ ba đầy đủ để có thể <strong>chọn loại phù hợp nhất cho GPU của mình</strong>: tùy chọn gọn nhẹ dành cho VRAM chật hẹp, mẫu máy có kích thước trung bình cân bằng và điểm kiểm tra lớn hơn khi bạn muốn chất lượng tối đa. Cài đặt tất cả các tệp, sau đó chọn tệp bạn muốn trong S2S — những tệp khác vẫn ở trên đĩa khi bạn nâng cấp phần cứng hoặc chuyển đổi khối lượng công việc. <strong>Các tệp <code>.gguf</code></strong> của riêng bạn sẽ xuất hiện trong cùng danh sách khi chúng nằm trong <code>mô hình</code>.",

    "llm_f1": "<code style=\"color:var(--accent-secondary);\">Qwen3.5-0.8B.q8_0.gguf</code> — <strong>Nhỏ nhất &amp; nhanh nhất.</strong> Qwen3.5 với kích thước nhỏ gọn: tuyệt vời khi VRAM bị hạn chế hoặc bạn muốn phản hồi tức thì.",
    "llm_f2": "<code style=\"color:var(--accent-secondary);\">Ministral-3-3B-Instruct-2512.Q6_K_H.gguf</code> — <strong>Thật thú vị.</strong> Điều chỉnh hướng dẫn tối thiểu với <strong>phạm vi đa ngôn ngữ xuất sắc</strong> — công việc chính mà hầu hết mọi người thực hiện hàng ngày.",
    "llm_f3": "<code style=\"color:var(--accent-secondary);\">qwen2.5-7b-instruct-q4_k_m.gguf</code> — <strong>Người đánh nặng nhất.</strong> Qwen2.5 7B ở mức lượng tử hóa chắc chắn: đạt được điều này khi bạn có khoảng trống và muốn có câu trả lời phong phú nhất.",

    "llm_install_h": "📂 Cài đặt (mất khoảng một phút)",
    "llm_install_highlight": "Đặt <strong>mọi</strong> điểm kiểm tra LLM <strong>chỉ</strong> trong thư mục <code>models</code> — <strong>không</strong> bên trong <code>models\\nllb</code> hoặc bất kỳ thư mục con nào khác. Áp dụng cho gói <strong>và</strong> của chúng tôi bất kỳ <code>.gguf</code> nào khác mà bạn thêm vào.",

    "llm_install_note": "Nếu S2S đang mở, hãy đóng và mở lại nó một lần để các điểm kiểm tra mới hiển thị trong bộ chọn mô hình.",
    "llm_lic_note": "Mỗi tệp trọng số vẫn tuân theo <strong>giấy phép mở ban đầu</strong> (ví dụ: các điều khoản của Apache&nbsp;2.0 hoặc Mistral). Bạn có trách nhiệm sử dụng chúng theo các giấy phép đó <strong>và</strong> với cấp giấy phép S2S của bạn (cá nhân và thương mại). Khi nghi ngờ, hãy ưu tiên các điểm kiểm tra Qwen nhỏ hơn để thử nghiệm và đảm bảo quy trình công việc thương mại phù hợp với thỏa thuận của bạn."
  }
});