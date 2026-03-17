import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User } from "lucide-react"
import { newsItems } from "@/lib/data/site-data"

// 詳細データ（JSONから）
const newsDetails: Record<string, {
  paper_title: string
  authors: string
  journal: string
  url: string
  abstract: string
  comment: string
}> = {
  "2026-03-08-ikeda-locc": {
    paper_title: "Feasibility of Endoscopic Closure Method Using Low Cost Clips With Thread for Post Gastric Endoscopic Submucosal Dissection: A Pilot Study",
    authors: "Ryosuke Ikeda, Hiroaki Kaneko, Hiroki Sato, Yuto Matsuoka, Tomomi Hamaguchi, Aya Ikeda, Yoshihiro Goda, Soichiro Sue, Kuniyasu Irie, Shin Maeda",
    journal: "JGH Open. 2026 Feb 27;10(3):e70376.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41688073/",
    abstract: "背景と目的：胃内視鏡的粘膜下層剥離術（ESD）後の潰瘍縫縮は、遅発性出血の予防に有用であるが、専用デバイス（Sure clip、Mantis clip等）は高価であり、診療報酬上の赤字を招くジレンマがある。本研究では、安価なEZclipとナイロン糸を用いた「Low-cost clip closure method (LoCC method)」の実現可能性と費用対効果を評価した。\n\n方法：2024年9月から2025年7月の間に胃ESDを受けた症例において、LoCC法を用いて粘膜欠損の閉鎖を行った。主要評価項目を完全閉鎖率、副次評価項目を閉鎖時間、コスト、術後1日目の維持率とした。\n\n結果・結論：完全閉鎖率は90.0%、術後1日目の持続閉鎖率は85.0%であった。コストの中央値は約19,500円であり、従来のROLM法（約50,500円）と比較して約1/3の費用に抑えることができた。LoCC法は、高価な器具を必要とせず、高い技術的実現性と優れた費用対効果を有する実用的な手法であることが示唆された。",
    comment: "今回低コストのEZclipを用いた胃ESD後潰瘍の縫縮法の実現可能性を検討した論文を報告致しました。\n\n昨今、胃ESD後潰瘍の縫縮は学会でもtopicではありますが、ROLMのためのSure clip、Mantis clip、EHS、OTSCなどいずれも高額であり、せっかく胃ESDを行って出血予防に縫縮までしたのに縫縮にコストをかけた結果、最終的に診療報酬が赤字になってしまうというジレンマが問題です。\n\nこの背景を元になるべく縫縮のコストをかけず、かつ縫縮がしばらく維持されるような方法として、EZclipとナイロンを使用して縫縮したLow-cost clip closure method (LoCC method)を考案し、その実現可能性を検証致しました。\n\n結果としては縫縮成功率は90％、翌日の縫縮維持は85％と他の縫縮法と比べてもまずまず良好な成績となりました。またコストは中央値19,500円であり、これをSure clipで行うROLMで行った場合は50,500円程度と、約1/3の費用で行う事ができました。\n\n手技自体もある程度の慣れは必要ですがそこまで複雑ではないので、今まで縫縮をしたくてもSure clipをたくさん使うのに値段的に抵抗があったり、Sure clipを大量に常備していない施設でも選択肢として考えてもいいかもしれません。ぜひ検討頂けましたら幸いです。\n\nなお今回の報告は私自身の中で10本目と一つの区切りの論文でした。コンセプト作りから症例集め、論文作成まで、ゼロから始めてこうして形にできた事に達成感を感じつつも、附属にいる間でぎりぎりacceptされた事に安堵しております。\n\nもちろん私自身だけで達成できた訳ではなく、改めて縫縮時に快く協力して頂いた内視鏡室の看護師の皆様、そしていつも論文作成に御助言を頂いている前田教授にこの場を借りて深くお礼を申し上げます。（池田良輔）"
  },
  "2026-03-03-doba": {
    paper_title: "Stepwise endoscopic management of diospyrobezoar-induced small bowel obstruction using long-cap-assisted suction and balloon catheter",
    authors: "Nobutaka Doba, Kosuke Shibayama, Shinzo Abe, Daiki Sakuma, Masanobu Someya, Kazuto Komatsu, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E325-E326.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41760226/",
    abstract: "背景と目的：柿胃石（diospyrobezoar）による小腸閉塞は、しばしば外科的処置が必要となる困難な病態です。本報告では、ロングキャップを用いた吸引とバルーンカテーテルを併用した、低侵襲で段階的な新しい内視鏡的治療アプローチの有用性を提示しました。\n\n方法：回腸の柿胃石による小腸閉塞に対し、内視鏡先端に装着したロングキャップによる強力な吸引保持と、ERCPバルーンカテーテルを用いた固定・破砕操作を組み合わせた「段階的内視鏡管理」を実施しました。\n\n結果・結論：まず新たな腸閉塞を予防するために胃内胃石を内視鏡的に破砕・除去し、続いて回腸胃石をバルーンで移動後に破砕・回収することで、外科的介入を回避して安全かつ効果的に閉塞を解除することに成功しました。本手法は、柿胃石による小腸閉塞に対する低侵襲な治療選択肢となり得ることが示唆されました。",
    comment: "回腸の柿胃石による小腸閉塞に対し,ロングキャップ補助吸引とERCPバルーンカテーテルを組み合わせた段階的内視鏡治療により,手術を回避して治療し得た症例を報告いたしました.まず新たな腸閉塞を予防するために胃内胃石を内視鏡的に破砕・除去し,続いて回腸胃石をバルーンで移動後に破砕・回収いたしました.本手法は,柿胃石による小腸閉塞に対する低侵襲な治療選択肢となり得ると考えております.\n\n本報告が,皆様の日常診療の一助となれば幸いです.\n\n治療をサポートいただいた消化器内科スタッフならびに内視鏡室の皆様に感謝申し上げます.\n\n最後に,日頃よりご指導いただいております前田教授に深く感謝申し上げます。（道端）"
  },
  "2026-02-15-miwa-double-lumen": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel double-lumen cannula designed for a 0.018-inch guidewire",
    authors: "Haruo Miwa, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E232-E233.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41688072/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、22G穿刺針と0.018インチガイドワイヤーの組み合わせは胆管穿刺には適していますが、その後の瘻孔拡張やステント留置のステップでは技術的な困難を伴うことがあります。特に、腰の強い0.035インチガイドワイヤーへの交換にはデバイスの入れ替えが必要で、胆汁漏出のリスクが課題となっていました。\n\n方法：PIOLAX社より発売された「Uneven double lumen cannula（0.018インチ対応モデル）」をEUS-HGSに使用しました。本デバイスは、先端が0.018インチ専用の細径設計であり、穿刺後の胆管への挿入が容易です。このカニューレを挿入後、サイドルーメン（side lumen）から胆汁吸引を行うと同時に、0.025インチまたは0.035インチのGWを追加留置する手技を施行しました。\n\n結果・結論：このUDLCを使用することで、デバイス交換を行うことなく、胆汁吸引と0.035インチガイドワイヤーへのスムーズな移行をワンステップで実現しました。本手法は、処置の安定性を向上させ、瘻孔拡張に伴うリスクを最小限に抑えることができる安全で効率的なアプローチであることが示されました。",
    comment: "EUS-HGSは非常に有用な排液術ですが、細径ガイドワイヤーから太径ガイドワイヤーへの交換時に発生するトラブルや胆汁漏出は、常に内視鏡医を悩ませるポイントでした。今回、PIOLAX社と共同で開発に携わった新型のダブルルーメンカニューレ（UDLC）を使用することで、この「デバイス交換」という手間とリスクを劇的に軽減することができました。現場のニーズを形にしたこのデバイスが、EUS-HGSの安全性と確実性を一段階引き上げる一助になれば幸いです。開発から検証まで、多大なるご支援をいただいた前田教授、ならびにセンター病院内視鏡室のスタッフの皆様に心より感謝申し上げます。今後も、より低侵襲で安全な治療を目指して研鑽を積んでまいります。（三輪 治生）"
  },
  "2026-02-14-sano-pancreatic": {
    paper_title: "Comparison of chemoradiotherapy and gemcitabine plus nab-paclitaxel for locally advanced pancreatic cancer: an integrated analysis of two randomized phase II trials (JCOG2408A)",
    authors: "Yusuke Sano, Riku Kajikawa, Junki Mizusawa, Tatsuya Ioka, Masato Ozaka, Satoaki Nakamura, Yoshinori Ito, Junji Furuse, Satoshi Kobayashi, Haruhiko Fukuda, Takuji Okusaka, Masafumi Ikeda, Haruo Miwa, Naoki Sasahira, Fumio Nagashima, Kazuyoshi Ohkawa, Kentaro Yamazaki, Masashi Kanai, Taro Yamashita, Kazuo Hara, Yukiko Takayama, Yoshito Komatsu, Nao Fujimori, Naoki Hama, Ken Kamata, Terumasa Hisano, Satoshi Shimizu, Kazutoshi Tobimatsu, Shin Maeda, Makoto Ueno",
    journal: "BMC Cancer. 2026 Feb 10.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41668051/",
    abstract: "背景と目的：局所進行膵臓がん（LAPC）の治療には、現在、主に化学放射線療法と全身化学療法の2つの治療法が用いられていますが、どちらの治療法がより有望なのか、あるいはこれらの治療法がLAPCの治療において代替療法または補完療法として考慮されるべきなのかは、依然として不明です。本研究では、LAPC患者を対象に、S-1と同時放射線療法（S-1 + RT）およびゲムシタビンとナブパクリタキセル（GnP）の併用療法における臨床転帰と安全性を評価することを目的としました。\n\n方法：日本臨床腫瘍研究グループ（JCOG1106およびJCOG1407）が実施した2つの多施設共同無作為化第II相試験から得られた個々の患者データを用いた統合探索的解析を実施しました。S-1 + RTとGnPを、それぞれ化学放射線療法と全身化学療法の有望なレジメンとして選択し、主要評価項目を無増悪生存期間（PFS）として解析を行いました。2群間のベースラインの不均衡を考慮するため、傾向スコアに基づいて安定化重みを用いた逆確率重み付け（IPTW）を適用しました。\n\n結果：合計113名の患者が対象となりました。IPTWによる調整後、S-1 + RT群とGnP群の比較において、PFS中央値は10.2ヶ月 vs. 9.3ヶ月（HR 0.88）、全生存期間（OS）は19.1ヶ月 vs. 21.2ヶ月（HR 0.73）、遠隔転移のない生存期間（DMFS）中央値は11.5ヶ月 vs. 13.1ヶ月（HR 0.73）でした。プロトコル治療後の治療内容は大きく異なり、S-1 + RT群では77.5%が単剤化学療法を受けたのに対し、GnP群では50.0%が多剤併用化学療法や化学放射線療法を含むより集中的な治療を受けました。\n\n結論：GnPは微小転移の抑制に利点をもたらす可能性があり、一方S-1 + RTは局所病変の制御に利点をもたらす可能性があります。これらの知見は、両アプローチがLAPCに対する重要かつ相補的な治療選択肢であることを示唆しています。最適な初期治療戦略を決定するためには、さらなる前向き無作為化試験が必要です。",
    comment: "局所進行膵癌に対する治療には,化学放射線療法と全身化学療法がありますが,いずれがより有効であるかについては,現時点で明確な結論は得られていません.\n\n本研究では,局所進行膵癌を対象とした2つのランダム化第II相試験である,JCOG1106「局所進行膵癌に対するS-1併用放射線療法における導入化学療法の意義に関するランダム化第II相試験である,JCOG1106「局所進行膵癌に対するS-1併用放射線療法における導入化学療法の意義に関するランダム化第II相試験」と,JCOG1407「局所進行膵癌を対象としたmodified FOLFIRINOX療法とゲムシタビン＋ナブパクリタキセル併用療法のランダム化第II相試験」の統合解析を行い,S-1併用放射線療法とゲムシタビン＋ナブパクリタキセル併用（GnP）療法の有効性・安全性を比較検討しました.\n\nその結果,GnP療法は微小転移の抑制において優位性を示す可能性がある一方で,S-1併用放射線療法は局所病変の制御に有益である可能性が示唆されました.\n\n最後に,本研究の立案から論文化に至るまでご指導いただきました,神奈川県立がんセンターの小林先生,上野先生,ならびに前田教授に心より感謝申し上げます。（佐野 裕亮）"
  },
"2026-02-08-shibui-uc-biomarker": {
    paper_title: "Anti-Integrin αvβ6 Autoantibodies Predict Response and Treatment Persistence to Advanced Therapies in Ulcerative Colitis",
    authors: "Shunsuke Shibui, Kunio Asonuma, Satoshi Kuronuma, Shinji Okabayashi, Akira Nogami, Moeko Komatsu, Kanade Serizawa, Satoko Umeda, Shintaro Sagami, Galia Berman, Osamu Takeuchi, Masaru Nakano, Toshifumi Hibi, Nitsan Maharshak, Shin Maeda, Taku Kobayashi",
    journal: "Clin Transl Gastroenterol. 2026 Feb 3.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41642243/",
    abstract: "背景と目的：抗インテグリンαvβ6（anti-αvβ6）自己抗体は、潰瘍性大腸炎（UC）の診断バイオマーカーとして、また予後不良との関連が知られています。本研究では、中等症から重症の活動期UC患者において、この抗体価が分子標的薬やJAK阻害薬などのアドバンス治療（Advanced Therapies）の治療効果を予測できるかどうかを検証しました。\n\n方法：アドバンス治療開始時に前向きに収集された血清サンプルを用い、抗αvβ6自己抗体価を測定しました。主要評価項目を1年までの治療継続率、副次評価項目を各週（2, 6, 14, 24, 48週）における臨床的寛解率とし、抗体価の低値群と高値群で比較解析を行いました。\n\n結果・結論：144名の患者を解析した結果、抗体価低値群では高値群と比較して治療継続率が有意に高いことが示されました（p = 0.002）。多変量解析においても、低抗体価は独立した治療継続の予測因子でした。臨床的寛解率もすべての評価時点で低値群において一貫して高く、特に6週目では顕著な差（47.5% vs. 20.0%）が認められました。以上の結果から、抗αvβ6自己抗体は活動期UC患者における治療効果および継続性を予測する有用なバイオマーカーである可能性が示唆されました。",
    comment: "潰瘍性大腸炎の治療は、生物学的製剤やヤヌスキナーゼ阻害薬をはじめとする新規治療薬(advanced therapy）の登場により大きく進歩してきました.しかし,これらの治療薬が奏功するか否かを治療開始前に予測することは,依然として困難です.\n\n近年,抗インテグリンαvβ6抗体は潰瘍性大腸炎における血清診断バイオマーカーとして注目されています.本研究では,advanced therapy開始時に測定した抗αvβ6抗体が治療効果を予測し得るかについて検討しました.\n\n解析の結果,抗αvβ6抗体値が低い群では,高い群と比較して1年間の治療継続率が有意に高く,臨床的寛解率も一貫して高いことが明らかとなりました.さらに,本抗体はCRPなどの従来の炎症指標とは独立した予測因子であり,患者ごとに最適な治療戦略を立案するための新たなバイオマーカーとして,今後の臨床応用が期待されます.\n\n本研究はDDW 2025にて口頭発表を行い,AOCC 2025ではTravel Awardを受賞することができました.研究デザインの構築から学会発表,論文化に至るまで多大なるご指導を賜りました北里研究所病院の先生方ならびに前田教授に,この場をお借りして心より感謝申し上げます.（渋井俊祐）"
  },
  "2026-02-05-miwa-traction-band": {
    paper_title: "Traction-band clip-assisted biliary cannulation for a papilla located in the horizontal limb after total gastrectomy",
    authors: "Haruo Miwa, Yugo Ishino, Kazuki Endo, Ritsuko Oishi, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E184-E185.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41633390/",
    abstract: "背景と目的：胃全摘後の再建腸管におけるバルーン内視鏡下ERCP（BE-ERCP）での胆管挿管は、乳頭が解剖学的に特異な位置にある場合、極めて困難となる。本報告では、乳頭が水平脚に位置し、高度な可動性により挿管に難渋した胃全摘後の症例に対し、トラクションバンド付きクリップを用いて乳頭を安定させ、挿管を成功させた新しい技術を提示した。\n\n方法：Roux-en-Y再建を伴う胃全摘後の78歳男性。乳頭が水平脚に位置し、通常の処置用具では可動性を制御できず挿管困難であった。SureClip Traction Bandを乳頭の肛門側に留置し、別のクリップでバンドを牽引・回転させて十二指腸壁に固定。追加のクリップでカウンター・トラクションをかけることで、乳頭を十分に安定化させた。\n\n結果・結論：トラクションバンドシステムによる固定後、乳頭の可動性が抑制され、ダブルガイドワイヤー法（double-guidewire technique）を用いて選択的胆管挿管に成功した。本手法は、術後再建腸管例における困難な胆管挿管を克服するための、低侵襲で有効な代替手段となり得ることが示唆された。",
    comment: "術後再建腸管に対するERCPは,結石治療や胆道ドレナージはinterventional EUSに置き換わりつつありますが,診断目的のERCPについては代替治療がありません.この度,胃全摘後の胆管癌が疑われたものの,乳頭が水平脚に開口しており胆管挿管に難渋した症例を経験したため,E-videoとして報告しております.\n\n当院では術後の胆管挿管困難時には,回転式パピロトームやUnevenカテーテルを使用しておりますが,本例は可動性が高く膵管挿管も難しいため打開策のない状態でした.このため,憩室内乳頭で使用経験のあるトラクションバンド付きSure Clipを使用して乳頭を肛門側に向けて固定したのち,Double guidewire tehcniqueを用いて胆管挿管に成功しました.\n\nバルーン内視鏡下ERCPでの同様の使用例はこれまでに報告がなく,通常消化管と異なり真っ直ぐ牽引するとクリップからバンドが外れてしまい難渋しました.このため,バンドを把持したクリップを回転させることでバンドを牽引することに成功し,有効な固定が可能となりました.\n\nすでに確立された手技であるERCPでも,まだまだ工夫が眠っていることを実感する症例でした.困難例の介助をしてくれたスタッフとご指導いただきました前田教授に感謝いたします.（三輪 治生）"
  },
  "2026-01-28-miwa-angled-puncture": {
    paper_title: "EUS-guided hepaticoduodenostomy with angled puncture technique to avoid the interposed gallbladder (with video)",
    authors: "Haruo Miwa, Hiroki Sato, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endosc Ultrasound. 2025 Nov-Dec;14(6):359-360.",
    url: "https://pubmed.ncbi.nlm.nih.gov/39835158/",
    abstract: "背景と目的：十二指腸から肝後区域枝（B6）を穿刺するEUS-HDS（hepaticoduodenostomy）は、十二指腸球部でのスコープ操作に制限があるため、穿刺経路の設定に難渋することが少なくありません。本報告では、肝癌および肝門部胆管狭窄により通常のドレナージが困難で、かつ穿刺経路上に胆嚢が介在していた困難症例に対する新しい穿刺テクニックを提示しました。\n\n方法：富士フイルム社製の処置用超音波内視鏡（EG-740UT）を使用。まず肝表面を垂直に穿刺し、そこからスコープにダウンアングルをかけながら穿刺を進めることで、介在する胆嚢を回避してB6へ到達させる「angled puncture technique」を施行しました。\n\n結果・結論：穿刺方向が末梢向きとなりガイドワイヤー等の誘導には工夫を要しましたが、最終的に7Fr Type ITステントの留置に成功し、良好な減黄効果を得ることができました。本手法は、解剖学的な制約がある症例におけるEUS-HDSの安全性と確実性を高めるための有用な選択肢となり得ることが示されました。",
    comment: "十二指腸から肝後区域枝（B6)を穿刺するEUS-HDS(hepaticoduodenostomy)は,十二指腸球部でのスコープ操作に制限があり,穿刺経路の設定に難渋することがあります.このたび,HCC,肝門部胆管狭窄により経乳頭的なドレナージが困難であった症例に対して,EUS-HDSを施行した症例をEndoscopic Ultrasound誌に投稿させていただきました.\n\n初回の観察では穿刺経路上に胆嚢を認めており,穿刺が困難でしたが,FUJIFILM社のEG-740UTを使用して垂直に肝表面を穿刺し,ダウンアングルをかけながらB6を穿刺することが可能でした.穿刺方向が末梢向きになりGWおよびステントの肝門側への誘導は叶いませんでしたが,無事に７Fr Type ITを留置し減黄治療に成功しております.\n\n当院ではこれまでに６例に対してEUS-HDSを施行しておりますが,いずれの症例も工夫が必要な困難例であり,３例ではVideo articleとして報告しております.\n\n今後も,interventional EUSにおけるTIPSを報告し,安全な治療として確立されていく一助になれば幸いです.\n\n肝胆膵グループの皆様,投稿に際してご指導いただきました前田教授に御礼を申し上げます.（三輪 治生）"
  },
  "2026-01-23-miwa-nitinol-wire": {
    paper_title: "Simultaneous bridging and antegrade stent-in-stent placement via endoscopic ultrasound-guided hepaticogastrostomy using novel multi-hole metal stents",
    authors: "Haruo Miwa, Hiromi Tsuchiya, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E125-E127.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41571260/",
    abstract: "背景と目的：内視鏡的超音波ガイド下肝胃吻合術（EUS-HGS）は、ブリッジングおよび順行性ステント留置術と組み合わせて使用されてきましたが、被覆されていない金属ステントは腫瘍の侵入や開存性の制限に悩まされることが多いです。本稿では、新たに開発された5.9 Frスリムデリバリーシステムを備えた多孔金属ステント（HANAROSTENT Biliary Multi Hole Benefit）を使用し、同時ブリッジングおよび順行性ステントインステント留置を実現する新しいEUS-HGS技術を報告します。\n\n方法：進行胆嚢癌による肝門部胆道閉塞および十二指腸閉塞を伴う67歳女性に対し、最初のドレナージ法としてEUS-HGSを選択しました。19ゲージ針で穿刺後、ガイドワイヤーを総胆管と右前枝にそれぞれ挿入。最初の多孔金属ステント（6mm×6cm）を右肝内胆管から左肝内胆管へのブリッジングステントとして留置しました。次に、ガイドワイヤーを最初のステントの側孔（side hole）を通して総胆管へ進め、バルーン拡張後、2つ目の多孔金属ステントを順行性ステントとして側孔から挿入し、部分的なステント内ステント留置に成功しました。\n\n結果・結論：最後にプラスチックステントを肝胃吻合路に留置しました。多孔金属ステントを用いた同時ブリッジングおよび順行性ステント内ステント留置によるEUS-HGSの報告はこれが初めてです。この手技は、十二指腸狭窄を伴う肝門部胆道閉塞に対して、長期の開存性をもたらす可能性があると考えられます。",
    comment: "近年Boston scientific社より発売されたHANAROSTENT Multi Holeは,多孔式フルカバーの特徴を活かして肝門部胆管狭窄への使用報告が増えてきています.特に5.9Frの細径デリバリーに改良された「Multi Hole Benefit」は,EUS-HGSルートから挿入可能であり,EUS-HGSと組み合わせてAntegrade stentingや左右肝管のBridgingにも用いられています.\n\nこのたび,Bismuth IIIaの肝門部胆管狭窄に十二指腸浸潤を伴った胆嚢癌の症例に対して,BridgingとAntegrade stentingを同時に施行した症例を経験したため報告させていただきました.\n\n複雑な手技のため手順を以下に示します.\n1.EUS下にB3を穿刺し,GWを留置\n2.Unevenカテーテルを挿入し,狭窄を通過して右前枝および総胆管に2本のGWを留置\n3.前枝から左肝管にかけてMulti Hole Benefit 6mm 6cm(SEMS①)を留置\n4.SEMS①のside holeよりGWを通して,REN 6mmで拡張\n5.Side holeを通してSEMS②を総胆管から左肝管にかけて留置\n6.左肝内胆管にType ITを留置\n\nこれまでセンター病院で行ってきたinterventional EUSの中でも最も複雑な処置でしたが,術者の土屋先生の技術や肝胆膵Gスタッフの尽力により合併症無く完遂することができました.2025年はiEUS80件（うちHGS関連50件）を全例成功することができ,論文として15編を報告しています.\n\n今後も,患者さんに適切かつ安全な治療を行えるよう前進して参りたいと思います.\n\n本報告に際してご協力いただいた皆様,ご指導いただきました森本先生,前田先生に深謝申し上げます.（三輪 治生）"
  },
  "2026-01-23-endo-hepatic-cyst": {
    paper_title: "Successful Stepwise Endoscopic Ultrasound-Guided Cyst Drainage for a Giant Infected Hepatic Cyst: A Case Report",
    authors: "Kazuki Endo, Haruo Miwa, Hiroki Sato, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "DEN Open. 2026 Jan 19;6(1):e70286.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41567181/",
    abstract: "背景と目的：巨大肝嚢胞による胆管閉塞および胆管炎に対し、外科的手術や経皮的ドレナージが検討されますが、嚢胞が血管や胆管を強く圧排している場合、経皮的穿刺は誤穿刺のリスクを伴います。本報告では、そのような困難症例に対し、超音波内視鏡（EUS）ガイド下での段階的なドレナージを行い、良好な経過を得た症例を提示しました。\n\n方法：肝嚢胞感染を合併した巨大肝嚢胞に対し、初回治療としてEUSガイド下肝嚢胞ドレナージを選択。嚢胞の縮小に合わせて段階的に処置を進めるステップバイステップのアプローチを施行しました。\n\n結果・結論：EUSを用いることで、介在する血管や胆管を回避しながら安全に嚢胞内に到達し、効果的なドレナージを行うことができました。巨大感染性肝嚢胞に対するEUS治療の報告はまだ限られていますが、本症例のように周囲臓器への圧排が強い症例においては、低侵襲かつ安全な代替療法となり得ることが示唆されました。",
    comment: "今回,巨大肝嚢胞による胆管炎に対してERCP治療を行った後,巨大肝嚢胞感染を合併した症例を報告させていただきました.\n\n胆管を高度に圧排するほどの巨大肝嚢胞は,私自身初めて経験する病態でした.感染性肝嚢胞に対しては一般的に経皮的ドレナージが選択されますが,本症例では嚢胞が血管や胆管・胆嚢を強く圧排しており,経皮的穿刺による誤穿刺のリスクが懸念されました.\n\nそのため,本症例ではEUSガイド下肝嚢胞ドレナージを選択しました.巨大感染性肝嚢胞に対するEUS治療の報告は限られており,初回ドレナージ方法や,嚢胞が縮小した後の最終的な治療方法について試行錯誤を要しましたが,結果として良好な経過を得ることができました.\n\n本報告が,今後皆様の診療の一助となれば幸いです.\n\n最後に,本症例の治療にご協力いただいたセンター病院の先生方,治療を受けてくださった患者様,ならびに論文指導を賜りました三輪先生,前田先生をはじめとする共著者の先生方に深く御礼申し上げます.（遠藤和樹）"
  },
  "2026-01-22-suzuki-lams-multicenter": {
    paper_title: "Laser ablation for tumor ingrowth of the bridging stent via the endoscopic ultrasound-guided hepaticogastrostomy",
    authors: "Yuichi Suzuki, Haruo Miwa, Kazuki Endo, Ritsuko Oishi, Hiromi Tsuchiya, Manabu Morimoto, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E92-E93.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41558646/",
    abstract: "背景と目的：悪性肝門部胆管狭窄（MHBO）に対し、超音波内視鏡下肝胃吻合術（EUS-HGS）を介したブリッジングステント留置は、経乳頭的ドレナージが困難な症例において有用な選択肢です。しかし、腫瘍の増殖（ingrowth）によるステント閉塞（RBO）に対する再介入（re-intervention）戦略はまだ確立されていません。本報告では、EUS-HGSルート（trans-ESCR）を介して、ステント内の腫瘍増殖に対しレーザー焼灼術を施行した新しい治療法を提示しました。\n\n方法：膵頭十二指腸切除後の乳頭部癌再発によるBismuth IIIa型狭窄を呈した60代男性。すでにEUS-HGSとブリッジングステントが留置されていましたが、腫瘍のingrowthにより閉塞。胆道鏡（eyeMAX）を用いて閉塞部位を確認後、Holmium:YAGレーザー（エネルギー 0.8 J、周波数 12 Hz）を用いて、EUS-HGSルートから経皮的・経乳頭的アプローチを介さずに直接腫瘍を焼灼しました。\n\n結果・結論：レーザー焼灼によりステント内の再開通に成功し、胆道鏡および胆管造影で開存を確認しました。追加のステント留置を行うことなく再ドレナージが完了し、術後2〜3ヶ月の開存が得られました。本手法は、複雑なドレナージが行われている肝門部症例の再介入における、低侵襲で有効な治療選択肢となり得ることが示唆されました。",
    comment: "高度分断の肝門部胆管狭窄に対して複数本の金属ステント(uncovered SEMS)を留置した場合のre-interventionは,内部にplastic stentやSEMSを更に追加する選択肢がありますが,特にSEMSを重ねていくと段々re-interventionがきつくなってきます…．腫瘍のingrowthによるSEMS閉塞に対して経乳頭でのERCPにおけるレーザー焼灼やラジオ波焼灼術などが少数例報告されておりますが,今回はtrans-ESCR(EUS-HGSルート)でSEMS内部のingrowthに対するレーザー焼灼を試み,ステントを追加することなく再開通が得られた症例を報告させて頂きました.ステント追加せずに2-3か月の開存が得られており,EUS-BDを含む複雑なドレナージを行っている肝門部症例のre-interventionにおける一つの治療選択肢を示すことができたかと思っています.\n\n今回,センター病院ではレーザー機器を使用する機会を与えて頂き,その準備や管理において色々と奮闘する事もありましたが,結石破砕以外の面でも本症例のようにEHLではできない治療ができ,大変ありがたく思います.最後に,ご指導頂いた三輪先生,センター病院で共に闘う仲間達,前田教授,そして何より患者様に心より感謝申し上げます.（鈴木悠一）"
  },
  "2026-01-20-ikeda-ppi-fgp": {
    paper_title: "Proton Pump Inhibitor-Induced Fundic Gland Polyps With Massive Bleeding Regressed on Alternative Histamine 2 Receptor Antagonist Therapy",
    authors: "Ryosuke Ikeda, Hiroaki Kaneko, Hiroki Sato, Yuto Matsuoka, Tomomi Hamaguchi, Aya Ikeda, Yoshihiro Goda, Soichiro Sue, Kuniyasu Irie, Shin Maeda",
    journal: "DEN Open. 2026 Jan 15;6(1):e70273.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41550412/",
    abstract: "背景と目的：プロトンポンプ阻害薬（PPI）の長期服用は胃底腺ポリープ（FGP）の誘発に関連することが知られています。FGPは一般に良性ですが、そこからの大出血は極めて稀です。本報告では、抗凝固療法中にPPI誘発性FGPから大量出血を来した症例と、H2受容体拮抗薬（H2RA）への切り替えによる治療経過を提示しました。\n\n方法：抗リン脂質抗体症候群のためワルファリンとPPIを服用していた46歳男性。多発・増大したFGPを認めていましたが、意識消失を伴う大量出血を来し受診。緊急内視鏡検査の結果、増大したFGPからのoozing（じわじわとした出血）が確認されました。PT-INRの是正で止血後、再発防止のためPPIを中止し、代替療法としてH2RAを選択しました。\n\n結果・結論：H2RAへの変更後、2ヶ月後および6ヶ月後の経過観察内視鏡において、FGPの著明な自然退縮が確認されました。本症例は、抗凝固療法中の患者においてPPI誘発性FGPが重大な出血源となり得ること、およびPPIの中止が困難な場合の代替としてH2RAへの変更がFGP退縮に有効な選択肢であることを示唆しています。",
    comment: "今回増大したPPI関連FGPからの大量出血した症例を報告致しました. FGPは基本的に良性病変であり,最近PPI/P-CAB内服による反応性に増大する事は知られておりますが,そこまで問題を起こす事は少なく経過観察する事も多いのではないでしょうか.\n\n今回ワーファリン内服中の患者が増大したPPI関連FGPから大量出血を来し,PT-INR是正で対応した症例を経験致しました.PPI関連FGPの治療としては,PPIを中止するという事は多く言われていますが実臨床では止めたくてもなかなか止められない患者が多いのも事実です.そこで今回H2RAに変更したところ徐々に自然退縮を認め,H2RAへの変更も有効な選択肢である事が示唆されました.\n\nPPI関連FGPはほとんどが無症状ですが,抗凝固薬を内服している患者では稀に出血する事がある,またPPI中止だけでなくH2RAへの変更も選択肢である事を知って頂けましたら十分かと思います. 最後にいつも投稿にあたりご指導頂いております前田教授に深謝申し上げます.（池田良輔）"
  },
  "2026-01-20-onodera-long-tip": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel long-tip cannula for the management of difficult guidewire insertion into the peripheral bile duct",
    authors: "Sho Onodera, Hiroki Sato, Haruo Miwa, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan;58(S 01):E131-E132.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41548085/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、穿刺および瘻孔拡張の後にガイドワイヤーを末梢胆管へ誘導するステップは、鋭角な分岐や狭窄がある場合、しばしば技術的な困難を伴います。本報告では、新しく開発された「ロングチップカニューレ（long-tip cannula）」を用いることで、この困難なガイドワイヤー挿入を克服した症例を提示しました。\n\n方法：悪性胆道狭窄に対してEUS-HGSを施行した症例において、穿刺後に新型のロングチップカニューレ（M-Through long tip cannula; PIOLAX社製）を使用しました。このカニューレは先端のチップ部分が10mmと長く設計されており、その長いチップを胆管内に深く挿入することで、安定したルートを確保した上でガイドワイヤーを誘導しました。\n\n結果・結論：ロングチップカニューレを使用することにより、従来の短いチップのカニューレではガイドワイヤーが逸脱しやすかった鋭角な分岐部においても、高い支持性を得ることが可能となりました。その結果、スムーズに末梢胆管へのガイドワイヤー留置に成功しました。本デバイスは、EUS-HGSにおけるガイドワイヤー操作の成功率を高め、手技全体の確実性を向上させる有用なツールであることが示されました。",
    comment: ""
  },
  "2026-01-20-miwa-slim-cholangioscope": {
    paper_title: "A novel slim cholangioscope facilitates antegrade laser lithotripsy for an intrahepatic biliary stone with acute ductal angulation",
    authors: "Haruo Miwa, Shotaro Tsunoda, Kazuki Endo, Ritsuko Oishi, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2025 Dec;57(S 01):E1125-E1127.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41038260/",
    abstract: "背景と目的：内視鏡的超音波ガイド下肝胃吻合術（EUS-HGS）を介した順行性レーザー砕石術は、肝内胆管が鋭角に屈曲している場合、ターゲットへのアプローチが極めて困難となります。本報告では、高度な屈曲性能を備えた新型の細径胆道鏡（9-Fr eyeMAX）を用いることで、この課題を克服し結石除去に成功した技術を提示しました。\n\n方法：膵頭十二指腸切除術後、肝内胆管結石を来した78歳男性。当初、バルーン内視鏡下ERCPを試みましたが、腸管の癒着と胆管の鋭角な屈曲のため処置が困難でした。そのため、EUS-HGSを施行して順行性ルートを作成し、3週間後に新型の細径胆道鏡（9-Fr eyeMAX）をメタルステント経由で挿入。屈曲した胆管内でスコープの操作と吸引を駆使して結石を正面に捉え、レーザー砕石術（LithoEVO）を施行しました。\n\n結果・結論：レーザー砕石により結石を完全に破砕・除去し、合併症なく治療を完遂しました。本報告は、新型の細径胆道鏡を用いた順行性レーザー砕石術の初めての報告です。本デバイスの優れた追従性は、解剖学的に困難な症例における胆道結石治療の有効な選択肢となり得ることが示唆されました。",
    comment: "近年,様々な特徴を持った胆道鏡が発売されており,診断および結石治療に使用されています.市民総合医療センターでは2023年よりMicro-Tech社のeyeMAXを導入し,主に9Frの細径スコープを使用しています.9Fr eyeMAXは狭窄部の通過だけでなく,鉗子口径3.2mmのバルーン内視鏡でも使用でき,EUS-HGS/HJSにより作成したESCRルートからも挿入が容易なため,術後再建腸管症例にも有用です.\neyeMAXを使用した結石除去では,これまで電気水圧衝撃波（EHL)を使用してきましたが,胆管結石に対して承認を得たレーザー治療機（LithoEVO; Edap TMS)を使用する機会があり,治療を完遂した症例をE-videoに報告させていただきました.\n膵頭十二指腸切除後の肝内結石に対して,当初はバルーン内視鏡下POCSで結石破砕を試みましたが,腸管の癒着が強く結石の正面視が不可能でした.このため,EUS-HGSを施行し,ESCR経由での9Fr eyeMAX挿入,レーザー治療を試みました.こちらも正面視に難渋しましたが,どうにか結石を破砕し終えて,空腸へ除去し治療を完遂しました.\n今後も,新たな医療機器を用いて,患者さんにとって有益な治療法を開発していきたいと思います.論文投稿に際して,前田教授,消化器病センター内科の皆様に御礼を申し上げます.（三輪治生）"
  },
  "2026-01-20-soma-ultra-tapered-dilator": {
    paper_title: "Cholangioscopy-guided laser lithotripsy alongside a plastic stent for common bile duct stones after total gastrectomy",
    authors: "Ryo Soma, Haruo Miwa, Kazuki Endo, Ritsuko Oishi, Yuichi Suzuki, Hiromi Tsuchiya, Manabu Morimoto, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E59-E61.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41539338/",
    abstract: "背景と目的：胃全摘後の再建腸管を伴う症例や巨大結石に対するERCPは、技術的に極めて困難な課題です。特に胆管の屈曲が強い場合、胆道鏡（POCS）の操作性が著しく制限されます。本報告では、プラスチックステント（PS）を併用することで胆道鏡の操作性を向上させ、安全に完全採石に至った新しい手技を提示しました。\n\n方法：胃全摘後の総胆管結石を認めた症例に対し、まず7-FrのダブルピグテールPSを留置し、胆管を直線化させました。その数日後、留置したPSの脇（alongside）に細径胆道鏡（9-Fr eyeMAX）を挿入。PSによる胆道の直線化と支持性を利用して結石へのアプローチを容易にし、ホルミウムYAGレーザー（LithoEVO）を用いて砕石術を施行しました。\n\n結果・結論：PSを併用することで胆道鏡の操作性が劇的に向上し、巨大結石を確実に破砕・除去することに成功しました。また、PSの存在は胆道内の過剰な圧力上昇を防ぎ、術後胆管炎の予防にも寄与しました。本手法（モノレール法）は、再建腸管を伴う困難な胆石治療において、有効かつ安全な戦略となり得ることが示唆されました。",
    comment: "今回胃全摘後の総胆管結石に対して,PS留置下で胆道鏡を挿入し完全採石に至った症例を報告させていただきました.\n\n術後再建腸管や巨大結石はERCPにおける困難症例の一つです.胆道鏡の登場により巨大結石の治療選択肢が増えましたが,術後再建腸管では結石の正面視が困難で治療に難渋することも多いです.本症例ではPSを留置したまま胆道鏡を挿入することで,胆道の直線化による操作性の向上,過剰な胆道内圧上昇の予防に寄与すると考えました.新規デバイスと既存のデバイスの融合で新たな知見が得られ,より安全で確実な治療に結び付くことは消化器内視鏡の醍醐味であると再認識いたしました.\n\nERCPにおいて胆道鏡や小腸鏡を要す症例では人手と時間がかかり,その分チームワークがより重要であると日々感じております.本症例も例外ではなく,そういった症例で経験したことを,私にとって初投稿となる論文で報告することができ本当に嬉しく思います.\n\n投稿にあたり根気強くご指導いただきました三輪先生をはじめ,センター病院の先生方,前田教授,森本先生に深謝申し上げます.（相馬亮）"
  },
  "2026-01-09-nishio-ultra-tapered-needle": {
    paper_title: "Short- and Long-Term Outcomes of Endoscopic Resection for Serrated Lesions in Patients With Ulcerative Colitis: A Retrospective Exploratory Study",
    authors: "Masafumi Nishio, Kingo Hirasawa, Ryosuke Kobayashi, Kingo Hirasawa, Shin Maeda",
    journal: "Dig Endosc. 2026 Jan;38(1):e70089.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41503722/",
    abstract: "背景と目的：潰瘍性大腸炎（UC）患者における鋸歯状病変（SL）のマネージメントは、それが通常の（散発性）病変なのか、あるいは炎症に関連した腫瘍（colitis-associated neoplasia）なのかを区別することが困難であり、臨床上の課題となっています。本研究の目的は、UC患者に発生した鋸歯状病変に対する内視鏡的切除術（ER）の短期および長期予後を評価することです。\n\n方法：UC患者において内視鏡的切除が行われた鋸歯状病変を対象とした後方視的探索的研究を実施しました。切除の完全性、再発率、および長期的な経過を詳細に解析しました。\n\n結果・結論：UC患者における鋸歯状病変に対する内視鏡的切除は、手技として許容される成功率と安全性を示しました。しかし、一部の病変においては再発や病勢の変化に注意が必要であり、慎重な経過観察が求められることが示唆されました。本研究の結果は、UC併発鋸歯状病変に対する適切な治療戦略を構築するための重要な基盤となります。",
    comment: "本論文は,潰瘍性大腸炎（UC）に併発した鋸歯状病変の内視鏡治療の予後を検討した研究です.\n\nマニアックすぎる話題ですが,実臨床ではその取り扱いで悩むことが多い問題です.\n\n通常の鋸歯状病変として扱ってよいのか,はたまたUC関連腫瘍として扱うべきなのかなど,マネージメントが全く定まっていない領域です.\n\n本研究では,UCの鋸歯状病変も内視鏡的切除が許容されるものの,その中には注意して経過観察するべき病変もあることを示しました.\n\n「切除できるものはまず内視鏡切除して経過観察でもよいのでは？でも炎症関連かもしれないから注意が必要な病変はありそうだよね」と思いながら診療していましたが,それをデータとして少し示せたと思います.\n\nいつもたくさんの症例をご紹介いただくIBDセンターの先生方,論文のご指導いただきました平澤欣吾先生,前田愼教授に深く感謝申し上げます.（西尾匡史）"
  },
  "2026-01-09-kobayashi-guidewire": {
    paper_title: "Feasibility of pancreatic duct stent placement before endoscopic submucosal dissection for superficial duodenal neoplasms adjacent to the papilla",
    authors: "Ryosuke Kobayashi, Haruo Miwa, Kingo Hirasawa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Clin Endosc. 2025 Dec 31.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41499799/",
    abstract: "背景と目的：十二指腸の浅表性非乳頭部上皮性腫瘍（SNADET）に対する内視鏡的粘膜下層剥離術（ESD）は、特に主乳頭近傍の病変において技術的に困難であり、偶発症のリスクが高い。本研究の目的は、主乳頭近傍のSNADETに対する、ESD施行前の予防的膵管ステント留置を組み合わせた治療戦略の有効性と安全性を評価することです。\n\n方法：2014年3月から2023年9月の間に、主乳頭近傍（10mm以内）のSNADETに対し、予防的膵管ステント留置後にESDを施行した11例を対象に後方視的解析を行いました。\n\n結果・結論：全例（100%）で一括切除に成功し、R0切除率は90.9%であった。ステント留置からESDまでの期間の中央値は2日であった。ESD中のステント脱落は認められず、全例でクリップを用いた完全な縫縮が可能であった。偶発症として、遅発性出血が1例、術後膵炎が2例に認められた。本手法は、主乳頭近傍のSNADETに対する有効な治療戦略となり得るが、術後膵炎のリスクは依然として存在し、さらなる予防策の検討が必要であることが示唆されました。",
    comment: "十二指腸ESDは,皆様もご存じのとおり偶発症のリスクが高く,技術的難易度も高い内視鏡治療の一つです.なかでも,十二指腸主乳頭近傍病変に対するESDでは,乳頭浮腫による術後膵炎や,ESD潰瘍創部の縫縮時に乳頭を巻き込むリスクが問題となります.\n\nそこで,これらの偶発症予防を目的として,我々は十二指腸主乳頭近傍病変に対するESDに際し,まずERCPにより膵管ステントを留置し,数日後にESDを施行する治療戦略をとりました.今回は,本手法を用いた11例の治療成績について報告しております.\n\nERCPによる膵管ステント留置および十二指腸ESDはいずれも高い専門的技術を要する手技であり,本治療は各専門グループ間の緊密な連携があって初めて成立するものと思います.\n\n診療にあたっていただいた肝胆膵グループの先生方,管グループの先生方,また論文執筆をサポートいただいた三輪先生,平澤先生,前田教授に感謝申し上げます.（小林亮介）"
  },
  "2026-01-09-taniguchi-ultrasound-score": {
    paper_title: "Development and validation of a novel intestinal ultrasound score for predicting endoscopic activity of ileocecal ulcers in intestinal Behçet's disease",
    authors: "Katsuki Taniguchi, Reiko Kunisaki, Sho Sato, Serina Haruyama, Kazuki Kurimura, Yoshinori Nakamori, Masafumi Nishio, Kenichiro Toritani, Rongrong Wu, Hideaki Kimura, Toshiaki Ebina, Kazushi Numata, Shin Maeda",
    journal: "J Gastroenterol. 2026 Jan 6.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41495368/",
    abstract: "背景と目的：腸管型ベーチェット病（BD）において、内視鏡的な潰瘍の活動性を非侵襲的に評価するための確立された指標は存在しません。本研究の目的は、内視鏡所見と高度に相関する腸管超音波検査（IUS）の指標を特定し、病勢を予測するための新しいIUSスコアを開発・検証することです。\n\n方法：2007年から2019年の間に内視鏡検査とIUSを施行した症例を対象に、後方視的解析により「IUS活動性スコア」を構築しました。その後、2020年から2024年の独立した症例群を用いて、その予測精度を前方視的に検証しました。\n\n結果・結論：開発されたIUSスコアは、前方視的検証においても内視鏡的な活動性を極めて高い精度で予測できることが示されました。本スコアは、侵襲を伴う内視鏡検査を頻回に行うことなく、腸管型ベーチェット病の病勢をリアルタイムかつ簡便にモニタリングするための有用なツールとなり得ることが証明されました。",
    comment: "2024年に報告させていただいた論文に続き,今回も腸管ベーチェット病に対する腸管超音波検査の有用性を報告いたしました.\n\n今回の研究では2つの超音波所見を組み合わせることで,腸管病変の活動性を非常に高い精度で予測できることを示しました.\n\n本研究成果が,腸管ベーチェット病の患者さんの負担軽減に少しでも寄与できれば幸いです.\n\n本研究はアジアIBD学会であるAOCC2025でIUS Awardを受賞させていただくなど,自分にとっては非常に思い入れのある研究です.\n\n時間はかかりましたが,目標としていたJournal of Gastroenterologyに採択していただき,非常に嬉しく思っております.\n\n本論文の執筆にあたり,ご指導賜りました国崎先生,前田先生,ならびに共著の皆様に深謝申し上げます.（谷口勝城）"
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const newsItem = newsItems.find(item => item.id === slug)
  return {
    title: newsItem?.title || "お知らせ詳細",
    description: newsItem?.title || "横浜市立大学消化器内科学教室からのお知らせ",
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const newsItem = newsItems.find(item => item.id === slug)
  const detail = newsDetails[slug]

  if (!newsItem) {
    notFound()
  }

  // 前後の記事を取得
  const currentIndex = newsItems.findIndex(item => item.id === slug)
  const prevItem = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null
  const nextItem = currentIndex > 0 ? newsItems[currentIndex - 1] : null

  // 著者名を抽出
  const authorMatch = detail?.comment?.match(/（([^）]+)）$/)
  const authorName = authorMatch ? authorMatch[1] : ""

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/news" className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            お知らせ一覧に戻る
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <time className="text-sm text-white/60">{newsItem.date}</time>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
              {newsItem.category}
            </span>
          </div>
          <h1 className="mt-4 font-serif text-2xl font-bold leading-relaxed text-white md:text-3xl">
            {newsItem.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          {detail ? (
            <div className="space-y-10">
              {/* 論文情報カード */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                {/* ヘッダー */}
                <div className="border-b border-border bg-navy/5 px-6 py-4 md:px-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Paper Information</p>
                </div>
                <div className="p-6 md:p-8">
                  {/* 論文タイトル */}
                  <h2 className="font-serif text-xl font-bold leading-relaxed text-navy md:text-2xl">
                    {detail.paper_title}
                  </h2>
                  
                  {/* 著者 */}
                  <div className="mt-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-sub">Authors</p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {detail.authors}
                    </p>
                  </div>
                  
                  {/* 掲載誌・リンク */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-sub">Journal</p>
                      <p className="text-sm font-medium text-foreground">
                        {detail.journal}
                      </p>
                    </div>
                    <a
                      href={detail.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-teal/90 hover:shadow-md"
                    >
                      PubMedで見る
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="overflow-hidden rounded-2xl border border-border bg-off-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-border bg-white px-6 py-4 md:px-8">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">A</span>
                  <h3 className="font-serif text-lg font-bold text-navy">Abstract</h3>
                </div>
                <div className="p-6 md:p-8">
                  <div className="space-y-4 text-sm leading-loose text-text-sub">
                    {detail.abstract.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment */}
              {detail.comment && detail.comment.trim() !== "" && (
                <div className="overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-gold/10 to-gold/5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-gold/20 bg-white/50 px-6 py-4 md:px-8">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm text-white">
                      <User className="h-4 w-4" />
                    </span>
                    <h3 className="font-serif text-lg font-bold text-navy">
                      {authorName ? `${authorName}先生のコメント` : "著者コメント"}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-sm leading-loose text-text-sub whitespace-pre-line">
                      {detail.comment.replace(/（[^）]+）$/, '').trim()}
                    </div>
                    {authorName && (
                      <p className="mt-6 text-right text-sm font-medium text-navy">
                        （{authorName}）
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <p className="text-text-sub">詳細情報は準備中です。</p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            {prevItem ? (
              <Link
                href={prevItem.href}
                className="group flex items-center gap-2 text-sm text-text-sub transition-colors hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden md:inline">前の記事</span>
              </Link>
            ) : (
              <div />
            )}
            <Link
              href="/news"
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-off-white"
            >
              一覧に戻る
            </Link>
            {nextItem ? (
              <Link
                href={nextItem.href}
                className="group flex items-center gap-2 text-sm text-text-sub transition-colors hover:text-navy"
              >
                <span className="hidden md:inline">次の記事</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
