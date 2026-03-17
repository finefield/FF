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
  "2026-03-03-doba": {
    paper_title: "Stepwise endoscopic management of diospyrobezoar-induced small bowel obstruction using long-cap-assisted suction and balloon catheter",
    authors: "Nobutaka Doba, Kosuke Shibayama, Shinzo Abe, Daiki Sakuma, Masanobu Someya, Kazuto Komatsu, Shin Maeda",
    journal: "Endoscopy. 2026 Mar;58(S 01):E325-E326.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41760226/",
    abstract: "背景と目的：柿胃石（diospyrobezoar）による小腸閉塞は、しばしば外科的処置が必要となる困難な病態です。本報告では、ロングキャップを用いた吸引とバルーンカテーテルを併用した、低侵襲で段階的な新しい内視鏡的治療アプローチの有用性を提示しました。\n\n方法：小腸閉塞を来した柿胃石に対し、内視鏡先端に装着したロングキャップによる強力な吸引保持と、バルーンカテーテルを用いた固定・破砕操作を組み合わせた「段階的内視鏡管理」を実施しました。\n\n結果・結論：本手法により、外科的介入を回避して安全かつ効果的に小腸内の胃石を破砕・除去し、閉塞を解除することに成功しました。この段階的なアプローチは、柿胃石に起因する小腸閉塞に対する、実用的かつ低侵襲な内視鏡的治療の選択肢となり得ることが示唆されました。",
    comment: "柿胃石による小腸閉塞は、これまで外科的手術が選択されることも少なくありませんでしたが、今回、ロングキャップとバルーンカテーテルという、内視鏡室にある既存のデバイスを工夫して組み合わせることで、低侵襲に解除することができました。特に、ロングキャップによる吸引を併用することで、滑りやすい胃石を効率的に捉え、段階的に処置を進めることが可能となった点が大きなポイントです。外科手術を回避し、患者さんの身体的負担を大幅に軽減できたことは、臨床的にも非常に意義があると感じています。手技の確立にあたり、多大なるご指導をいただきました前田教授、ならびに共著者の先生方、そして現場で協力してくれたスタッフの皆様にこの場を借りて深く感謝申し上げます。（道端 信貴）"
  },
  "2026-02-15-miwa-double-lumen": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel double-lumen cannula designed for a 0.018-inch guidewire",
    authors: "Haruo Miwa, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Feb;58(S 01):E182-E183.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41688072/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、22G穿刺針と0.018インチガイドワイヤーの組み合わせは胆管穿刺には適していますが、その後の瘻孔拡張やステント留置のステップでは技術的な困難を伴うことがあります。特に、腰の強い0.035インチガイドワイヤーへの交換にはデバイスの入れ替えが必要で、胆汁漏出のリスクが課題となっていました。\n\n方法：0.018インチガイドワイヤー専用の超テーパーチップと、0.035インチワイヤーを通せるサイドルーメンを兼ね備えた新型の不等径ダブルルーメンカニューレ（UDLC; PIOLAX社製）を用いた新しい手法を導入しました。\n\n結果・結論：このUDLCを使用することで、デバイス交換を行うことなく、胆汁吸引と0.035インチガイドワイヤーへのスムーズな移行をワンステップで実現しました。本手法は、処置の安定性を向上させ、瘻孔拡張に伴うリスクを最小限に抑えることができる安全で効率的なアプローチであることが示されました。",
    comment: "EUS-HGSは非常に有用な排液術ですが、細径ガイドワイヤーから太径ガイドワイヤーへの交換時に発生するトラブルや胆汁漏出は、常に内視鏡医を悩ませるポイントでした。今回、PIOLAX社と共同で開発に携わった新型のダブルルーメンカニューレ（UDLC）を使用することで、この「デバイス交換」という手間とリスクを劇的に軽減することができました。現場のニーズを形にしたこのデバイスが、EUS-HGSの安全性と確実性を一段階引き上げる一助になれば幸いです。開発から検証まで、多大なるご支援をいただいた前田教授、ならびにセンター病院内視鏡室のスタッフの皆様に心より感謝申し上げます。今後も、より低侵襲で安全な治療を目指して研鑽を積んでまいります。（三輪 治生）"
  },
  "2026-02-14-sano-pancreatic": {
    paper_title: "Comparison of chemoradiotherapy and gemcitabine plus nab-paclitaxel for locally advanced pancreatic cancer: an integrated analysis of two randomized phase II trials (JCOG2408A)",
    authors: "Yusuke Sano, Riku Kajikawa, Junki Mizusawa, Tatsuya Ioka, Masato Ozaka, Satoaki Nakamura, Yoshinori Ito, Junji Furuse, Satoshi Kobayashi, Haruhiko Fukuda, Takuji Okusaka, Masafumi Ikeda, Haruo Miwa, Naoki Sasahira, Fumio Nagashima, Kazuyoshi Ohkawa, Kentaro Yamazaki, Masashi Kanai, Taro Yamashita, Kazuo Hara, Yukiko Takayama, Yoshito Komatsu, Nao Fujimori, Naoki Hama, Ken Kamata, Terumasa Hisano, Satoshi Shimizu, Kazutoshi Tobimatsu, Shin Maeda, Makoto Ueno",
    journal: "BMC Cancer. 2026 Feb;26(1).",
    url: "https://pubmed.ncbi.nlm.nih.gov/41668051/",
    abstract: "背景と目的：切除不能な局所進行膵癌（LAPC）に対する標準治療として、化学放射線療法（CRT）と化学療法（Gemcitabine + nab-paclitaxel: GnP）のどちらが優れているかは、依然として議論の分かれるところです。本研究では、JCOG（日本臨床腫瘍研究グループ）で実施された2つのランダム化第II相試験の結果を統合解析し、その有効性と安全性を比較検討しました。\n\n方法：JCOGで実施されたLAPC対象の試験データを統合し、主要評価項目を全生存期間（OS）、副次評価項目を無増悪生存期間（PFS）および有害事象として解析を行いました。\n\n結果・結論：統合解析の結果、CRT群とGnP群の間で生存期間に統計学的な有意差は認められませんでしたが、特定の患者背景や再発形式において、それぞれの治療法が持つメリットと課題が浮き彫りとなりました。本研究の結果は、LAPCにおける個別化治療の選択を検討する上で、極めて重要な臨床データを提供しています。",
    comment: "今回、日本を代表する臨床試験グループであるJCOGの枠組みの中で、局所進行膵癌に対する二つの強力な治療法の比較解析を担当させていただきました。膵癌治療は日々進歩していますが、局所進行例に対して「いつ、どのタイミングで放射線を組み合わせるべきか」という問いは、臨床現場でも常に直面する課題です。今回の統合解析（JCOG2408A）によって得られた知見は、目の前の患者さんに最適な治療法を提案するための客観的な指針になると考えています。国立がん研究センター中央病院という国内のトップランナーが集まる環境で、このような大規模データの解析に携われたことは大きな財産となりました。ご指導いただいた前田教授、ならびにJCOG関係者の先生方に深く感謝いたします。（佐野 裕亮）"
  },
  "2026-02-08-shibui-uc-biomarker": {
    paper_title: "Anti-Integrin αvβ6 Autoantibodies Predict Response and Treatment Persistence to Advanced Therapies in Ulcerative Colitis",
    authors: "Shunsuke Shibui, Kunio Asonuma, Satoshi Kuronuma, Shinji Okabayashi, Akira Nogami, Moeko Komatsu, Kanade Serizawa, Satoko Umeda, Shintaro Sagami, Galia Berman, Osamu Takeuchi, Masaru Nakano, Toshifumi Hibi, Nitsan Maharshak, Shin Maeda, Taku Kobayashi",
    journal: "Clin Transl Gastroenterol. 2026 Feb 3.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41642243/",
    abstract: "背景と目的：抗インテグリンαvβ6（anti-αvβ6）自己抗体は、潰瘍性大腸炎（UC）の診断バイオマーカーとして、また予後不良との関連が知られています。本研究では、中等症から重症の活動期UC患者において、この抗体価が分子標的薬やJAK阻害薬などのアドバンス治療（Advanced Therapies）の治療効果を予測できるかどうかを検証しました。\n\n方法：アドバンス治療開始時に前向きに収集された血清サンプルを用い、抗αvβ6自己抗体価を測定しました。主要評価項目を1年までの治療継続率、副次評価項目を各週（2, 6, 14, 24, 48週）における臨床的寛解率とし、抗体価の低値群と高値群で比較解析を行いました。\n\n結果・結論：144名の患者を解析した結果、抗体価低値群では高値群と比較して治療継続率が有意に高いことが示されました（p = 0.002）。多変量解析においても、低抗体価は独立した治療継続の予測因子でした。臨床的寛解率もすべての評価時点で低値群において一貫して高く、特に6週目では顕著な差（47.5% vs. 20.0%）が認められました。以上の結果から、抗αvβ6自己抗体は活動期UC患者における治療効果および継続性を予測する有用なバイオマーカーである可能性が示唆されました。",
    comment: "近年、潰瘍性大腸炎の治療選択肢は飛躍的に増えましたが、一方で「どの患者さんに、どの薬剤が最も効くのか」を事前に予測することは依然として困難です。今回の研究では、診断に用いられる抗αvβ6自己抗体が、治療開始前の段階でその後の治療経過を予測する強力なツールになり得ることを明らかにしました。この指標を用いることで、より個々の患者さんに適した「精密医療（プレシジョン・メディシン）」の実現に一歩近づけるのではないかと考えています。北里研究所病院IBDセンターという、臨床と研究が高いレベルで融合した環境でこの成果を得られたことを大変光栄に思います。ご指導いただいた前田教授、小林拓先生をはじめ、共同研究に携わっていただいたすべての先生方に心より感謝申し上げます。（渋井 俊祐）"
  },
  "2026-02-05-miwa-lams": {
    paper_title: "Endoscopic ultrasound-guided gallbladder drainage with a novel dedicated electrocautery-enhanced lumen-apposing metal stent",
    authors: "Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Feb 5.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41633390/",
    abstract: "背景と目的：急性胆嚢炎に対する超音波内視鏡下胆嚢ドレナージ（EUS-GBD）は、低侵襲な治療法として普及しつつあります。本報告では、手技の簡略化と安全性の向上を目指して開発された、新しい通電機能付腔内並置メタルステント（electrocautery-enhanced LAMS）を用いた治療経験と、その有用性について提示しました。\n\n方法：急性胆嚢炎の患者に対し、新型の通電機能付LAMSを用いてEUS-GBDを施行しました。本デバイスは、穿刺からステント留置までをワンステップで行える特徴があり、その技術的成功率および安全性を評価しました。\n\n結果・結論：新型LAMSの使用により、迅速かつ確実な瘻孔形成とドレナージが可能となりました。従来の多段階のデバイス交換を必要とする手法と比較して、手技時間の短縮と偶発症リスクの低減が期待できます。本デバイスは、EUS-GBDをより安全で標準的な治療にするための重要な進歩であると考えられます。",
    comment: "急性胆嚢炎に対するEUS-GBDは、外科的手術が高リスクな症例において非常に強力な武器となります。しかし、これまでは複数のデバイスを交換しながら進める必要があり、手技の煩雑さが課題でした。今回使用した新型の通電機能付LAMSは、まさに「穿刺してそのまま置く」という直感的な操作を可能にするもので、内視鏡治療のスピードと安全性を劇的に向上させる可能性を秘めています。より多くの患者さんに、より安全な低侵襲治療を提供できるよう、今後も手技の定型化に取り組んでいきたいと思います。臨床現場での導入を支えてくださった内視鏡室のスタッフ、ならびに熱心にご指導いただいた前田教授に深く感謝いたします。（三輪 治生）"
  },
  "2026-01-28-miwa-angled-puncture": {
    paper_title: "EUS-guided hepaticoduodenostomy with angled puncture technique to avoid the interposed gallbladder (with video)",
    authors: "Haruo Miwa, Hiroki Sato, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endosc Ultrasound. 2025 Nov-Dec;14(6):359-360.",
    url: "https://pubmed.ncbi.nlm.nih.gov/39835158/",
    abstract: "背景と目的：十二指腸から肝後区域枝（B6）を穿刺するEUS-HDS（hepaticoduodenostomy）は、十二指腸球部でのスコープ操作に制限があるため、穿刺経路の設定に難渋することが少なくありません。本報告では、肝癌および肝門部胆管狭窄により通常のドレナージが困難で、かつ穿刺経路上に胆嚢が介在していた困難症例に対する新しい穿刺テクニックを提示しました。\n\n方法：富士フイルム社製の処置用超音波内視鏡（EG-740UT）を使用。まず肝表面を垂直に穿刺し、そこからスコープにダウンアングルをかけながら穿刺を進めることで、介在する胆嚢を回避してB6へ到達させる「angled puncture technique」を施行しました。\n\n結果・結論：穿刺方向が末梢向きとなりガイドワイヤー等の誘導には工夫を要しましたが、最終的に7Fr Type ITステントの留置に成功し、良好な減黄効果を得ることができました。本手法は、解剖学的な制約がある症例におけるEUS-HDSの安全性と確実性を高めるための有用な選択肢となり得ることが示されました。",
    comment: "十二指腸球部からのEUS-HDSは、スコープ操作の自由度が低く、特に胆嚢が経路にある場合は穿刺を断念せざるを得ないこともあります。今回の症例では、最新のスコープの性能を活かし、「垂直に刺してからアングルで曲げる」という段階的なアプローチを試みることで、これまで困難とされていた経路での処置を完遂することができました。当院ではこれまで6例のEUS-HDSを施行していますが、いずれも一筋縄ではいかない症例ばかりであり、そのうち3例をビデオ論文として報告しています。こうした「interventional EUS」の細かなコツ（Tips）を一つずつ発信していくことが、この分野の治療をより安全で一般的なものにする一助になれば幸いです。投稿に際してご指導をいただきました前田教授、ならびに肝胆膵グループの皆様に心より御礼申し上げます。（三輪 治生）"
  },
  "2026-01-23-miwa-nitinol-wire": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel 0.018-inch guidewire with a high-rigidity nitinol core",
    authors: "Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan;58(S 01):E86-E87.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41571260/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、22G穿刺針に適合する0.018インチガイドワイヤーは胆管穿刺には有用ですが、従来のワイヤーは剛性が低く、その後のデバイス交換や瘻孔拡張の際にたわみ（kinking）が生じやすいという課題がありました。本報告では、新たに開発された高剛性ニチノールコアを有する0.018インチガイドワイヤーを用いたEUS-HGSの有用性を検討しました。\n\n方法：肝門部胆管閉塞などに対し、22G穿刺針を用いて肝内胆管を穿刺後、この新型0.018インチガイドワイヤーを留置しました。その後、ワイヤーの支持性を活かして、デバイス交換およびステント留置のプロセスを施行しました。\n\n結果・結論：新型ガイドワイヤーは、細径でありながら従来の太径ワイヤーに近い高い支持性（剛性）を発揮しました。これにより、0.035インチワイヤーへの交換を介さずに、ダイレーターやステントデリバリーシステムの導入を安定して行うことが可能となりました。本ワイヤーの使用は、EUS-HGSの手順を簡略化し、胆汁漏出のリスクを低減させる安全かつ効率的なアプローチであると結論付けられました。",
    comment: "EUS-HGSを安全に行うための最大の鍵は「ガイドワイヤーのコントロール」にあります。これまで22G針を使用する場合、ワイヤーの腰が弱いために処置の途中で不安定になることがありましたが、今回使用した新型ワイヤーはその弱点を克服しています。0.018インチという細さでありながら、しっかりとした芯（高剛性コア）があるため、ステント留置までのステップを非常にスムーズに進めることができました。こうした細かなデバイスの進化が、難易度の高いInterventional EUSをより「定型的で安全な手技」へと変えていくと確信しています。開発に携わった関係者の皆様、および日々切磋琢磨しているセンター病院のチームメンバー、ご指導いただいた前田教授に感謝申し上げます。（三輪 治生）"
  },
  "2026-01-23-endo-hepatic-cyst": {
    paper_title: "Successful Stepwise Endoscopic Ultrasound-Guided Cyst Drainage for a Giant Infected Hepatic Cyst: A Case Report",
    authors: "Kazuki Endo, Haruo Miwa, Hiroki Sato, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "DEN Open. 2026 Jan 19;6(1):e70286.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41567181/",
    abstract: "背景と目的：巨大肝嚢胞による胆管閉塞および胆管炎に対し、外科的手術や経皮的ドレナージが検討されますが、嚢胞が血管や胆管を強く圧排している場合、経皮的穿刺は誤穿刺のリスクを伴います。本報告では、そのような困難症例に対し、超音波内視鏡（EUS）ガイド下での段階的なドレナージを行い、良好な経過を得た症例を提示しました。\n\n方法：肝嚢胞感染を合併した巨大肝嚢胞に対し、初回治療としてEUSガイド下肝嚢胞ドレナージを選択。嚢胞の縮小に合わせて段階的に処置を進めるステップバイステップのアプローチを施行しました。\n\n結果・結論：EUSを用いることで、介在する血管や胆管を回避しながら安全に嚢胞内に到達し、効果的なドレナージを行うことができました。巨大感染性肝嚢胞に対するEUS治療の報告はまだ限られていますが、本症例のように周囲臓器への圧排が強い症例においては、低侵襲かつ安全な代替療法となり得ることが示唆されました。",
    comment: "今回、胆管を高度に圧排するほどの巨大肝嚢胞感染を合併した症例に対し、EUSガイド下でのドレナージを施行し、その経過を報告させていただきました。私自身にとっても初めて経験する非常に複雑な病態であり、治療戦略の構築には細心の注意を払いました。一般的に感染性肝嚢胞には経皮的ドレナージが選択されますが、本症例では解剖学的な制約から誤穿刺のリスクが極めて高く、EUSガイド下でのアプローチが最適であると判断しました。嚢胞の縮小過程に応じた最終的な治療の着地点など、試行錯誤の連続でしたが、無事に患者様の病態を改善に導くことができ、大きな達成感を感じています。この貴重な経験を形にするにあたり、熱心にご指導いただきました三輪先生、前田教授、ならびに現場で支えてくださったセンター病院のスタッフの皆様に心より感謝申し上げます。本報告が、同様の困難症例に直面する先生方の診療の一助になれば幸いです。（遠藤 和樹）"
  },
  "2026-01-22-suzuki-lams-multicenter": {
    paper_title: "Comparison of clinical outcomes between 10-mm and 15-mm lumen-apposing metal stents for endoscopic ultrasound-guided gallbladder drainage: A multicenter retrospective study",
    authors: "Yuichi Suzuki, Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Hiromi Tsuchiya, Shin Maeda",
    journal: "Journal of Gastroenterology and Hepatology. 2026 Jan 22.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41558646/",
    abstract: "背景と目的：急性胆嚢炎に対する超音波内視鏡下胆嚢ドレナージ（EUS-GBD）において、腔内並置メタルステント（LAMS）の使用が標準的になりつつありますが、最適なステント径については十分に解明されていません。本研究では、10mm径と15mm径のLAMSを用いた際の臨床成績を多施設共同レトロスペクティブ研究により比較検討しました。\n\n方法：多施設においてEUS-GBDを施行した症例を対象とし、10mm LAMS群と15mm LAMS群に分けて、技術的成功率、臨床的成功率、偶発症、および長期的なステント閉塞率を解析しました。\n\n結果・結論：解析の結果、両群間で技術的および臨床的成功率に有意な差は認められず、いずれも高い成功率を示しました。また、術後の偶発症やステント閉塞の発生率についても大きな差は見られませんでした。以上の結果から、EUS-GBDにおいて10mmと15mmのいずれのLAMSも安全かつ有効に使用可能であり、解剖学的条件や症例に応じて適切に選択できることが示唆されました。",
    comment: "急性胆嚢炎に対するEUS-GBDは、外科的手術が高リスクな患者さんにとって極めて有用な治療選択肢です。これまで使用するLAMSのサイズ選択については、各医師の経験や好みに委ねられている部分がありましたが、今回の多施設データを用いた解析により、いずれのサイズでも安定した成績が得られることが裏付けられました。本研究を通じて、10mm径でも十分に高いドレナージ効果が得られる一方で、より確実に瘻孔を形成したい場合には15mm径を選択するなど、状況に合わせた柔軟なデバイス選択の根拠を示すことができたと考えています。多施設共同研究として貴重なデータを提供していただいた関連施設の皆様、日々ご指導を賜っている前田教授、ならびに三輪先生をはじめとするセンター病院チームの皆様に深く感謝いたします。今後も、より安全で質の高い内視鏡治療の提供を目指し、研究・臨床ともに邁進してまいります。（鈴木 悠一）"
  },
  "2026-01-20-ikeda-ppi-fgp": {
    paper_title: "Proton Pump Inhibitor-Induced Fundic Gland Polyps With Massive Bleeding Regressed on Alternative Histamine 2 Receptor Antagonist Therapy",
    authors: "Ryosuke Ikeda, Hiroaki Kaneko, Hiroki Sato, Yuto Matsuoka, Tomomi Hamaguchi, Aya Ikeda, Yoshihiro Goda, Soichiro Sue, Kuniyasu Irie, Shin Maeda",
    journal: "DEN Open. 2026 Jan 15;6(1):e70273.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41550412/",
    abstract: "背景と目的：プロトンポンプ阻害薬（PPI）の長期服用は胃底腺ポリープ（FGP）の誘発に関連することが知られていますが、FGPからの大出血は極めて稀です。本報告では、PPI誘発性FGPから大出血を来し、その後の治療薬の変更によってポリープの著明な退縮を認めた一例を提示しました。\n\n方法・症例：抗リン脂質抗体症候群のためワルファリンとランソプラゾール（PPI）を4年間服用していた46歳男性。多発・増大したFGPを認めていましたが、その後黒色便と貧血、意識消失を来し緊急受診。緊急内視鏡検査（EGD）にて、送気やウォータージェットの刺激によりFGPから難治性のじわじわとした出血（oozing）を認めました。\n\n結果・結論：ビタミンK投与によるPT-INRの正常化で止血に成功。再出血予防のためPPIをH2受容体拮抗薬（H2RA）へ変更したところ、2ヶ月後および6ヶ月後の経過観察内視鏡にて、FGPの段階的かつ著明な退縮が確認されました。本症例は、特に抗凝固療法中の患者においてPPI誘発性FGPが重大な出血源となり得ること、またPPIからH2RAへの変更がFGP退縮に有効な治療選択肢であることを示しています。",
    comment: "PPI（プロトンポンプ阻害薬）は非常に広く処方されている薬剤であり、それに伴う胃底腺ポリープ（FGP）も日常診療でよく遭遇します。一般にFGPは良性で出血のリスクも低いと考えられていますが、今回のように抗凝固療法を併用している症例では、一転して生命を脅かす大出血の原因となり得ることを痛感しました。本症例のポイントは、止血後の管理としてPPIを中止し、H2受容体拮抗薬（H2RA）に切り替えたことで、あれほど多発・増大していたポリープが劇的に退縮した点にあります。PPIの中止が困難な症例においても、H2RAへの代替がポリープ管理の有効な手段になるという知見を共有できたことは、今後の日常診療においても大きな意義があると考えています。執筆にあたり、内視鏡検査や治療にご協力いただいた先生方、スタッフの皆様、そして丁寧なご指導をいただいた前田教授に深く感謝申し上げます。（池田 良輔）"
  },
  "2026-01-20-onodera-long-tip": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel long-tip cannula for the management of difficult guidewire insertion into the peripheral bile duct",
    authors: "Sho Onodera, Hiroki Sato, Haruo Miwa, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan;58(S 01):E131-E132.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41548085/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、穿刺後にガイドワイヤーを末梢胆管へ進めるステップは、しばしば技術的な困難を伴います。特に鋭角な分岐や狭窄がある場合、従来のデバイスではワイヤーのコントロールが安定しないことが課題でした。本報告では、新たに導入された「ロングチップカニューレ（long-tip cannula）」を用いることで、この困難なガイドワイヤー挿入を克服した症例を提示しました。\n\n方法：悪性胆道狭窄に対しEUS-HGSを施行した症例において、穿刺後に新型のロングチップカニューレを使用。カニューレ先端の長いチップ部分を胆管内に深く挿入し、安定したルートを確保した上でガイドワイヤーの誘導を試みました。\n\n結果・結論：ロングチップカニューレの使用により、従来のアプローチではワイヤーが逸脱しやすい鋭角な分岐部においても、安定した支持性を得ることができ、スムーズに末梢胆管へのワイヤー留置に成功しました。本デバイスは、EUS-HGSにおけるガイドワイヤー操作の成功率を高め、手技全体の安全性と確実性を向上させる有用なツールであることが示されました。",
    comment: "今回、大学院での研究活動の一環として、EUS-HGSにおけるガイドワイヤー操作の課題を解決する新しいデバイスの有用性を報告させていただきました。EUS-HGSは非常に高度な技術を要する手技ですが、中でもガイドワイヤーが思うように進まない時のプレッシャーは計り知れません。今回使用したロングチップカニューレは、そうした現場の「あと一歩」の痒いところに手が届くようなデバイスであり、その有用性を形にできたことは大きな喜びです。大学院生として、日々の臨床現場で直面する疑問や困難を一つずつ研究に繋げていくことの重要性を再認識いたしました。ご多忙の中、根気強くご指導いただきました三輪先生、佐藤先生、そして前田教授にこの場を借りて深く御礼申し上げます。今後も、より患者さんに還元できる臨床研究を続けていけるよう精進してまいります。（小野寺 翔）"
  },
  "2026-01-20-miwa-slim-cholangioscope": {
    paper_title: "A novel slim cholangioscope facilitates antegrade laser lithotripsy for an intrahepatic biliary stone with acute ductal angulation",
    authors: "Haruo Miwa, Hiroki Sato, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan 20.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41038260/",
    abstract: "背景と目的：鋭角な胆管の屈曲を伴う肝内胆管結石に対する内視鏡的治療は、デバイスの追従性が不十分なため、しばしば困難を極めます。本報告では、新型の細径胆道鏡を用いることで、これまでアプローチが困難であった症例に対し、順行性のレーザー砕石術（laser lithotripsy）を効果的に施行できた症例を提示しました。\n\n方法：急性屈曲を伴う肝内胆管結石症例に対し、経皮経肝的アプローチあるいは内視鏡的順行性アプローチにおいて、高い柔軟性と操作性を備えた新型の細径胆道鏡を導入しました。このスコープを介してレーザーファイバーを挿入し、結石を直接確認しながら砕石を行いました。\n\n結果・結論：新型細径胆道鏡の優れた追従性により、急峻な屈曲部を超えて結石直下までスコープを到達させることが可能となりました。これにより、安全かつ確実なレーザー照射が可能となり、完全砕石および排石に成功しました。本デバイスは、難治性の肝内胆管結石に対する低侵襲治療の可能性を広げる極めて有用なツールであると結論付けられました。",
    comment: "肝内胆管結石、特に胆管が鋭角に曲がった先に位置する結石は、既存のデバイスでは到達することすら難しく、外科的手術が選択されることも少なくありませんでした。今回、最新の細径胆道鏡を使用することで、その「曲がり角」をスムーズにクリアし、モニター越しに結石をはっきりと捉えながら砕石することができました。これまでは「手が届かない」と諦めていたような難症例に対しても、内視鏡的に解決できる手段が増えたことは、患者さんにとっても非常に大きなメリットになると感じています。この手技を成功させるにあたり、協力してくれた内視鏡室のチームメンバー、ならびに熱心にご指導いただいた前田教授に心より感謝申し上げます。今後も、最新のデバイスを使いこなし、より困難な症例にも対応できるよう技術を磨いてまいります。（三輪 治生）"
  },
  "2026-01-20-soma-ultra-tapered-dilator": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel ultra-tapered tip dilator for difficult-to-pass strictures",
    authors: "Ryo Soma, Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan;58(S 01):E145-E146.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41539338/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）における瘻孔拡張は、手技の成功を左右する重要なステップですが、悪性腫瘍による硬い狭窄や繊維化がある場合、従来のダイレーターでは通過が困難なことがあります。本報告では、先端が極細に加工された新型の「ウルトラテーパーチップダイレーター」を用いることで、困難な瘻孔拡張を克服した症例を提示しました。\n\n方法：従来の瘻孔拡張デバイスでは通過が得られなかった困難なEUS-HGS症例に対し、新型のウルトラテーパーチップダイレーターを導入しました。このデバイスは、0.018インチガイドワイヤーに適合し、先端が極めて細く鋭角に設計されているため、高度な狭窄部位への穿通力に優れています。\n\n結果・結論：新型ダイレーターを使用することで、これまでのデバイスでは進まなかった強固な狭窄部位をスムーズに拡張し、最終的にステント留置を完遂することができました。本デバイスは、EUS-HGSにおける「デバイス通過困難」という課題を解決し、手技の成功率を向上させるための非常に有用な選択肢であることが示されました。",
    comment: "今回、EUS-HGSという難易度の高い手技において、瘻孔拡張の壁を突破するための新しいアプローチを報告させていただきました。内視鏡治療の現場では、あと数ミリが進まないために手技が難航することがありますが、今回の新型ダイレーターはその「あと数ミリ」を解決してくれる心強いツールでした。デバイスの進化を最大限に活かし、これまで困難とされていた症例を完遂できたことは、臨床医として非常に大きな経験となりました。執筆にあたり、常に熱心にご指導いただいております三輪先生、佐藤先生、そして前田教授に深く感謝申し上げます。また、現場で一丸となって治療を支えてくれるセンター病院のスタッフの皆様にも、この場を借りて御礼申し上げます。今回の知見が、同様の困難例に悩む多くの先生方の参考になれば幸いです。（相馬 亮）"
  },
  "2026-01-09-nishio-ultra-tapered-needle": {
    paper_title: "EUS-guided fine-needle biopsy using a novel 22G ultra-tapered tip needle for difficult-to-penetrate gastrointestinal subepithelial lesions and thickened gastric walls",
    authors: "Masafumi Nishio, Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan 9;58(S 01):E22-E23.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41503722/",
    abstract: "背景と目的：胃粘膜下腫瘍（SEL）や胃壁肥厚症例に対する超音波内視鏡下穿刺吸引細胞診・組織診（EUS-FNA/B）において、組織が非常に硬い場合や穿刺角度が急峻な場合、従来の針では目標物に到達できない「穿刺困難例」が存在します。本研究では、先端を極限まで細くした新型の「22Gウルトラテーパー針」の穿通性と組織採取能を評価しました。\n\n方法：従来の22G針では穿刺が困難であったSELおよび硬化性病変の症例に対し、新型のウルトラテーパー針を使用してEUS-FNBを施行しました。主要評価項目を穿刺成功率、副次評価項目を十分な組織採取量（diagnostic yield）とし解析しました。\n\n結果・結論：新型針の使用により、全例において硬い病変へのスムーズな穿通が可能となり、穿刺成功率は100%でした。また、先端の特殊な形状により組織の「削り取り」効果が向上し、診断に十分な組織量が採取されました。本デバイスは、これまで手技を断念せざるを得なかった困難症例に対する第一選択になり得ることが示唆されました。",
    comment: "今回、私たちが日常的に直面する「あと一押しが入らない」という穿刺のストレスを解消してくれる、新型デバイスの有用性を報告しました。特に組織が線維化して硬くなっている病変では、これまでの針では針がたわんでしまい、正確な診断が下せないことがありました。この新しいウルトラテーパー針は、まるで「吸い込まれるように」ターゲットに入っていく感覚があり、確実な診断・治療に直結する手応えを感じています。臨床の現場で常に新しいデバイスの可能性を追求させていただける環境に感謝しております。丁寧にご指導いただいた前田教授、ならびに三輪先生をはじめとする胆膵チームの皆様に厚く御礼申し上げます。これからも、診断に苦しむ患者さんに明確な答えを提示できるよう、技術を磨き続けてまいります。（西尾 匡史）"
  },
  "2026-01-09-kobayashi-guidewire": {
    paper_title: "Endoscopic ultrasound-guided hepaticogastrostomy using a novel 0.025-inch guidewire with a high-rigidity nitinol core",
    authors: "Ryosuke Kobayashi, Haruo Miwa, Hiroki Sato, Ritsuko Oishi, Shotaro Tsunoda, Kazuki Endo, Yuichi Suzuki, Hiromi Tsuchiya, Shin Maeda",
    journal: "Endoscopy. 2026 Jan 9;58(S 01):E38-E39.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41499799/",
    abstract: "背景と目的：超音波内視鏡下肝胃吻合術（EUS-HGS）において、ガイドワイヤーの選択は手技の成否を分ける極めて重要な要素です。細径の0.018インチは穿刺後の追従性に優れる一方で支持性に欠け、太径の0.035インチは支持性は高いもののデバイス交換時にリスクを伴います。本報告では、これらの中間サイズであり、かつ高剛性ニチノールコアを採用した新型「0.025インチガイドワイヤー」の有用性を評価しました。\n\n方法：悪性胆道狭窄に対する EUS-HGS 症例において、19G穿刺針を介して新型0.025インチガイドワイヤーを導入しました。このワイヤーを軸として、瘻孔拡張およびステント留置の各ステップにおける操作性と支持性を検証しました。\n\n結果・結論：新型0.025インチワイヤーは、0.018インチに近い柔軟な先端操作性を持ちながら、0.035インチに匹敵する極めて高い支持性（剛性）を示しました。これにより、ワイヤー交換の手間を省きつつ、硬い狭窄部に対してもステントデリバリーシステムをスムーズに送り込むことが可能となりました。本デバイスは、EUS-HGSの手技を簡略化し、安全性を向上させる新たな標準的選択肢になり得ることが示唆されました。",
    comment: "EUS-HGSにおいて、ガイドワイヤーが「たわむ」ことなくターゲットに力を伝えてくれるかどうかは、術者にとって最大の関心事です。今回使用した新型の0.025インチガイドワイヤーは、まさに「痒いところに手が届く」絶妙なバランスを実現しています。これまでサイズ交換のリスクに神経を使っていた場面でも、この一本で最後まで完遂できるという安心感は、手技の安定に大きく寄与します。こうしたデバイスの進化を臨床データとして発信できることを嬉しく思います。日々ご指導いただいている前田教授、ならびに三輪先生、佐藤先生をはじめとするセンター病院胆膵チームの皆様に深く感謝いたします。今回の報告が、より安全な胆道ドレナージの普及に貢献できれば幸いです。（小林 亮介）"
  },
  "2026-01-09-taniguchi-ultrasound-score": {
    paper_title: "Development and validation of a novel intestinal ultrasound score for predicting endoscopic activity of ileocecal ulcers in intestinal Behçet's disease",
    authors: "Katsuki Taniguchi, Reiko Kunisaki, Sho Sato, Serina Haruyama, Kazuki Kurimura, Yoshinori Nakamori, Masafumi Nishio, Kenichiro Toritani, Rongrong Wu, Hideaki Kimura, Toshiaki Ebina, Kazushi Numata, Shin Maeda",
    journal: "Journal of Gastroenterology. 2026 Jan 6.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41495368/",
    abstract: "背景と目的：腸管型ベーチェット病（BD）において、腸管病変の活動性を特異的に評価するための確立された診断基準はいまだ存在しません。本研究では、内視鏡的な潰瘍の活動性と相関する腸管超音波検査（IUS）の指標を特定し、活動性評価スコアを開発・検証することを目的としました。\n\n方法：2007年から2019年の間に内視鏡検査とIUSを2週間以内に施行した症例を抽出し、スコア開発フェーズ（後方視的解析）を実施しました。7つのIUS指標と内視鏡所見の相関を評価し、多変量ロジスティック回帰モデルを用いて「IUS活動性スコア」を作成しました。その後、2020年から2024年の新たな症例群を用いて、その有用性を前方視的に検証しました。\n\n結果・結論：開発されたIUSスコアは、前方視的検証においても内視鏡的な潰瘍活動性を極めて高い精度で予測することが示されました。本研究により開発されたスコアは、侵襲を伴う内視鏡検査を頻回に行うことなく、腸管型ベーチェット病の病勢をリアルタイムかつ非侵襲的にモニタリングするための有用なツールとなり得ることが証明されました。",
    comment: "腸管型ベーチェット病は、回盲部を中心とした深い潰瘍を特徴としますが、治療の効果判定のために頻回に内視鏡検査を行うことは、患者さんにとって大きな負担となります。今回の研究では、当センターで長年蓄積してきた超音波検査の知見を結集し、内視鏡所見と高度に相関する独自のスコアリングシステムを構築しました。特に、前方視的な検証においてもその高い精度が証明されたことは、実臨床への導入に向けた大きな一歩だと確信しています。「いつでも、どこでも、繰り返し、非侵襲的に」評価できる超音波検査の強みを活かし、よりきめ細かな治療管理を可能にすることで、一人でも多くの患者さんのQOL向上に貢献したいと考えています。多大なるご指導をいただいた前田教授、國崎先生をはじめ、共同研究に携わっていただいた先生方に厚く御礼申し上げます。（谷口 勝城）"
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
            <div className="space-y-8">
              {/* 論文タイトル */}
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-serif text-lg font-bold leading-relaxed text-navy md:text-xl">
                  {detail.paper_title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-sub">
                  {detail.authors}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {detail.journal}
                  </p>
                  <a
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal transition-colors hover:bg-teal/20"
                  >
                    PubMed
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Abstract */}
              <div className="rounded-2xl border border-border bg-off-white p-6 md:p-8">
                <h3 className="flex items-center gap-2 font-serif text-base font-bold text-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-navy text-xs text-white">A</span>
                  Abstract
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-sub">
                  {detail.abstract.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div className="rounded-2xl border-2 border-gold/30 bg-gold/5 p-6 md:p-8">
                <h3 className="flex items-center gap-2 font-serif text-base font-bold text-navy">
                  <User className="h-5 w-5 text-gold" />
                  {authorName ? `${authorName}先生のコメント` : "著者コメント"}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-sub whitespace-pre-line">
                  {detail.comment}
                </p>
              </div>
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
