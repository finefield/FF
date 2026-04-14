"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Mail, Phone, ExternalLink, Building2, ChevronDown, User } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ---- 関連施設データ（メッセージ付き） ---- */
interface FacilityMessage {
  name: string
  category: "hub" | "affiliate"
  representatives: { name: string; title: string }[]
  message: string
}

const facilityMessages: FacilityMessage[] = [
  {
    name: "横浜市立大学附属病院",
    category: "hub",
    representatives: [{ name: "入江 邦泰", title: "文責（H19）" }],
    message: `附属病院では、前田教授にご指導を賜りながら、臨床診療、臨床・基礎研究、医学教育を行っています。

臨床診療では、特定機能病院および高度型地域がん診療連携拠点病院としての役割を有しているため、川崎、横浜、横須賀・三浦、湘南地区からご紹介をいただいた症例を中心に、common diseaseからがん診療や希少疾患まで様々な診療を行っており、消化器内科領域以外の希少疾患に対して消化器内科医としてサポートさせていただく機会も多く、大学ならではの多様な経験を積むことが可能です。

大学病院では、消化管、肝・胆膵、IBD診療などグループ毎に分かれての診療を行っている病院が多いですが、当病院では少人数でそれぞれのグループの専門性を有した医師がすべての入院患者を共同で診療にあたっています。カンファレンスなども共同で行っているため、診療に関して各分野からの意見を聞くことや消化器内科領域において幅広い経験が積むことが可能です。

検査・手技についても、消化管領域における内視鏡的診断やESD、EMR、LECSを中心とした内視鏡的治療、胆膵領域におけるERCP、EUS、EUS-IVR、AUS、肝領域におけるTACEやRFA、IBDにおける小腸カプセル内視鏡、バルーン内視鏡を用いた検査を行っており、それぞれsub-specialityを有した医師が専門性の高い治療を行うとともに、traineeの先生方へ指導を行いながら集中して手技獲得や読影ができるような指導体制をとって対応しております。

研究に関しては臨床研究のみならず、基礎研究にも力を入れています。前田教授からの直接指導を受けることも可能であり、国内・国際学会での発表や論文発表を積極的に行っております。また次世代臨床研究センター（Y-NEXT）という臨床研究専門部署に所属し、附属病院の研究全体を推進している医師もおり、臨床研究開始を最初から最後までサポートできる体制にあります。

医学教育に関して、附属病院は教育機関としても重要な役割を果たしております。医学生、専攻医、初期臨床研修医の教育、指導を行い、学会、地方会での発表も積極的に行っています。`,
  },
  {
    name: "横浜市立大学附属市民総合医療センター",
    category: "hub",
    representatives: [{ name: "沼田 和司", title: "消化器病センター内科 部長" }],
    message: `消化器病センター内科は一か月間の入退院数は160-200名で、早期胃癌、早期十二指腸癌、早期食道癌、早期大腸癌の内視鏡診断、内視鏡治療、消化管癌の薬物治療、膵炎や総胆管結石等の良性疾患、胆膵癌の超音波、超音波内視鏡、ERCP等の画像診断と薬物治療、ステント挿入等の治療、膵臓癌のsecond lineでの集束超音波(HIFU)治療と薬物治療との併用と薬物治療を比較する臨床治験、肝炎の診断、治療、早期肝癌から進行肝癌の造影超音波、EOB-MRIとの融合画像での診断から治療（RFA、TACE、放射線治療、薬物治療等の国際共同臨床試験）を行う職人集団です。

上記全疾患の臨床研究、工学系との共同研究等を元に学会発表、論文投稿を積極的に行っています。さらには内視鏡、超音波の勉強に海外からの短期・長期留学生が技術取得や研究論文記載のために来ており、実際に当院からの論文数は増えております。

後期研修終了後、内科専門医取得後の消化器専門研修として、幅広く高度な消化器内科診療を習得することが可能です。ぜひ当教室に入門して一緒に仕事をして体験してください。絶対損はしません。`,
  },
  {
    name: "神奈川県立がんセンター",
    category: "hub",
    representatives: [
      { name: "上野 誠", title: "消化器内科 肝胆膵 部長" },
      { name: "町田 望", title: "消化器内科 消化管 部長" },
      { name: "滝沢 耕平", title: "消化器内科 内視鏡 部長" },
    ],
    message: `県内唯一の「がん診療連携拠点病院」として平成25年には新病院が開院し、がん治療に特化した医療を行っています。消化管グループと肝胆膵グループに分かれますが、専門上級医の指導のもと充実した研修をお約束します。

消化器内科医としてがん診療の基礎を勉強したい先生、今後がん診療・緩和医療を専門に行っていきたいと考える先生、2〜3年間のローテートとして当施設での専門研修をぜひお考え下さい。

【当院の研修では…】

■ 消化器がんの全ステージを多数例経験
今後皆さんが実臨床で遭遇するがん症例は「早期」だけでなく、むしろ「進行期」や「ターミナル期」であることも少なくありません。当院ではあらゆるステージにおける最適・最新の治療法について学ぶことができます。
年間症例数：RFA 57件、TACE 118件、新規化学療法導入 20-30件（肝がん）・450件（胆膵がん）、ERCP総数 957件、EUS/EUS-FNA総数554件
消化管領域：上部ESD 250件超、大腸ESD 50件、新規化学療法導入 150件

■ 臨床試験や多施設共同研究に多数参画
新薬の臨床試験では今後主流となりそうな分子標的薬や免疫チェックポイント阻害剤の使い方を上級医の指導のもと経験できます。

■ 研究論文作成のお手伝い
学位取得を考えている皆さんは、ぜひ消化器内科学教室大学院の受験をお勧めします。当院では論文の基礎となるデータ整理や論文化のサポートをいたします。

■ 専門医取得
内科学会教育関連施設、消化器病学会・消化器内視鏡学会・肝臓学会・臨床腫瘍学会等の各指導施設です。また、臨床腫瘍学会の「がん薬物療法専門医」の取得もローテーション中にサポートします。

※職種には常勤医、任期付常勤医（最大3年まで）、レジデント（2〜3年）がありますが、待遇は卒年で決まるため給与体系は同一です（3〜10年目までの若い医師でもアルバイト無しで十分可能な給与待遇です）。`,
  },
  {
    name: "横浜南共済病院",
    category: "affiliate",
    representatives: [{ name: "近藤 正晃", title: "消化器内科部長" }],
    message: `横浜南共済病院は病床数565床、30に及ぶ診療科をもつ地域の基幹病院です。我々消化器内科は、スタッフ8人と専攻医5人の13人体制で診療にあたっています。

診療体制の特徴として、消化管グループと肝胆膵グループの2つのグループに分かれて入院診療にあたっていることです。各グループはさらに2チームに分かれ、1チームが上級医と専攻医の2-3人で構成されており、各チーム10－15人ずつの患者さんを担当しています。よって、専攻医の先生は常に上級医の指導の下、検査・治療を行いながら疾患に対する知識・経験を深めていくことができます。

チームカンファレンスは毎日行っていますが、他に消化器内科全体、内視鏡読影、外科との合同カンファも毎週1回行っています。

また研究会・学会へは積極的に参加してもらい、特に専攻医の先生には資格取得条件のこともありますが、発表や症例報告などの記載も頑張ってもらいたいと思っています。

当院ではベテランと若手が一体となって日々の診療に向かい合っています。新型コロナに対して、油断は禁物ですが、それほどストレスは感じない日常になり、見学もほぼ制限なく来ていただけるようになってきています。よろしければ、一度見学に来ていただいて、当院の雰囲気を感じてもらえればと思います。`,
  },
  {
    name: "済生会横浜市南部病院",
    category: "affiliate",
    representatives: [{ name: "杉森 一哉", title: "消化器内科部長" }],
    message: `済生会横浜市南部病院は横浜南部地域の基幹病院として横浜市が計画設置し済生会が運営しており、急性期病院として専門的、先進的医療、救急医療における地域の中心的役割を果たしています。港南台駅から徒歩3分の好立地です。横浜市立大学２大学病院とも近く多くの診療科で連携を取って診療を行っています。

消化器内科は、2011年度から当教室の関連施設となり、初年度は6人でスタートしましたが、年々増員され、現在は13人体制となっております。消化器内科での救急患者の診療は年間約700人で、病院全体で年間9000台を超える救急車を受け入れており、消化器内科以外の分野の救急診療も学ぶこともできます。

腹部血管造影、消化管ESD、EUS-FNA、IVR-EUS、カプセル内視鏡、小腸内視鏡など消化器内科として出来ない検査はないくらいで、様々な手技の習得が可能です。上級医が多いのも当院の特徴で、充実した体制で後期研修医への指導にあたっております。また、内科専門医制度においては診療科の垣根を超えた指導体制も整えております。是非、仲間になっていただき一緒に診療しましょう。`,
  },
  {
    name: "藤沢市民病院",
    category: "affiliate",
    representatives: [{ name: "福地 剛英", title: "消化器内科" }],
    message: `2021年に開院50周年を迎えた当院は、湘南の中心地である藤沢市に位置し、湘南地域の基幹病院として地域医療を支えております。病床数は536床で、医師数・診療科も非常に多く活気に満ちており、各科の垣根が非常に低く連携がとても良いことが特徴です。

藤沢市民病院 消化器内科のこれまでの歴史の中で、岩瀬滋 部長（2023年4月副院長就任）の指導のもと ≪先輩を超えるのは最低ライン、高卒ルーキーで4番エース≫ をモットーに若手を中心に日々切磋琢磨して診療に向き合っております。当院はERが充実し湘南地区の救急医療最後の砦として、症例数とその多彩さは圧倒的であり、若手医師の修練施設として最適な場所と考えます。

藤沢市民病院といえば若手医師が多い印象ですが、最近では指導医も増え、化学療法の安藤先生、IBDの稲垣先生（非常勤）、消化管（ESD）の福地・近藤先生、肝胆膵の西村・長島先生など、大学病院やがんセンターなどを初めとする専門施設で十分な修練と経験を積んだ医師が続々と藤沢市民病院へ集結し、どの分野も充実した指導体制が整いました。

内視鏡関連ではESDは神奈川県内の市中病院としては有数の件数（2022年度は240件）を誇り、若手も多くの症例を経験できます。専門施設と同じ最新鋭内視鏡での全例拡大観察を導入し、大学病院と同様の内視鏡診療のクオリティを目指しています。麻酔科と連携し、毎週全身麻酔下ESDを行う恵まれた環境もあり、安全で万全な体制での若手指導を行っております。

ERCP関連では再建腸管に対する小腸鏡を用いたERCPやEUS-HGSをはじめとしたInterventional EUSなど難易度の高い症例に対する治療も積極的に行っています。

新たな世代が集結しさらにその次の世代が超えていき、近い将来に≪全国区の消化器内科≫となることを目標とし、チーム一丸で必ず達成したいと思います。ぜひ、皆様と当院でともに熱く働ける日を楽しみにしております。`,
  },
  {
    name: "横浜保土ケ谷中央病院",
    category: "affiliate",
    representatives: [
      { name: "中馬 誠", title: "消化器内科部長・副病院長" },
      { name: "桑島 拓史", title: "消化器内科 医長" },
    ],
    message: `【病院の紹介】
横浜保土ケ谷中央病院は、横浜市保土ヶ谷区の小高い丘の上の緑豊かな自然に恵まれた病床数236床の中規模病院です。船員保険病院として昭和30年に開設され、平成26年に独立行政法人地域医療推進機構（JCHO）横浜保土ケ谷中央病院と改称いたしました。横浜駅からバスで20分、相鉄線上星川駅から徒歩15分のところに位置し、車では第三京浜常盤台ICから5分、保土ヶ谷バイパス新桜ケ丘ICから7分とアクセスは比較的良好です。

【消化器内科の特徴】
消化器内科のスタッフは5名（うち専攻医1名）で、比較的若い医師が多いものの、大学病院や県立がんセンター、大規模中核病院で研鑽を積んだ医師で構成されており、それぞれの得意分野を活かしながら生き生きと診療にあたっております。

地域に密着した市中病院であるため、消化器疾患に加えて、新専門医制度で必要となる一般内科疾患も多く経験できます。また、他科との垣根が低く気軽にコンサルトできる環境が全体に出来ております。

2023年度の内視鏡件数は、上部2612件、下部（EMR/CSP含）1054件、ERCP143件、ESD44件（食道5件、胃32件、大腸7件）でした。なるべく若手の先生方のトレーニングを優先しつつ、上級医がしっかりとフォローできるように体制を整えております。

2024年度からは、長らく大学病院で肝臓領域を指導していた中馬医師を副院長に迎え、更なる診療の拡充を進めております。胆膵領域やIBD領域に関しては、その分野に精通した指導医に週1コマずつ勤務していただいており、専門的な指導を受ける環境も整っております。

ひとりひとりの希望する働き方を尊重し、お互いが協力しあいながら診療にあたる雰囲気が醸成されております。夏休みはもちろん、その他の時期にも有給休暇の取得を推奨しております。

当院で専攻医をスタートして内科疾患や消化器疾患、内視鏡の基本を一通り学び、その後に大学病院や中核病院で専門性を高めていく方法もあります。皆様と一緒に働けることを楽しみにしております。`,
  },
  {
    name: "横浜掖済会病院",
    category: "affiliate",
    representatives: [{ name: "内藤 実", title: "病院長" }],
    message: `当院は1986年（明治29年）創立の病院です。元来は船員の方のための病院でしたが、現在は地域の住民の方々のための病院としての役割を務めています。

病床数は151床（3病棟）でそのうちの1病棟を内科が担当しています。診療科は他に外科と整形外科と眼科があり、麻酔科も含めてすべての科が横浜市大の関連施設となっています。

内科常勤医は消化器内科4名、血液内科1名、呼吸器内科1名の計6名です。他に循環器内科と脳神経内科の非常勤医師による専門外来があります。

消化器内科の検査・処置としては上部・下部消化管内視鏡検査、EMR・ポリペクトミー、EVL・EIS、ERCP・EST・EPBDなどを行っています。

市民総合医療センターと距離的に近いため、病病連携や若手Drの研修先として同センターと緊密な関係にあります。

規模が他の関連病院と比較して小さい病院ですがその分個人の裁量が利くため症例数はいくらでも増やせます。また小規模ゆえに病院内の他の部署と横のつながりも良好です。大病院とは一味違った経験を一度してみてください。`,
  },
  {
    name: "県立足柄上病院",
    category: "affiliate",
    representatives: [{ name: "川名 一朗", title: "病院長" }],
    message: `当院は、神奈川県西部の地域医療を担う中核病院です。当院の内科系は、総合診療科、消化器内科、呼吸器内科、神経内科からなります。専門科が揃っていないこともあり、我々指導医は消化器内科に限らず全ての内科を指導できるよう日々研鑽を積んでおります。

内科専門医研修プログラムでは多数の症例を主治医として経験できるため、広く深い学びを得ることができます。消化器内科医を志しているものの、内科医としても基盤をしっかり固めたいと考えている方は当院での研修を是非ご検討ください。

消化器内科は、消化管疾患・肝胆膵疾患いずれにおいても、地域唯一の医療機関として、common diseaseから専門領域までをカバーしているため幅広い症例を経験でき、消化器の基本技能の習得が可能です。検査や治療の手技に関しては高い敷居を設けておらず、やる気があり勉強してくれば積極的に術者として経験を積めます。多くの後期研修医は2年目が終わる時点で上下部消化管内視鏡のスクリーニング検査に加え、大腸EMR、ERCPまでは術者としてある程度安定して施行できるようになります。

学術指導にも力を入れており、最低年1回は学会発表してもらうと同時に、希望がある場合は論文作成の指導も行っています。

電車では小田急線新松田駅から徒歩3分、車では東名高速道路大井松田I.C.から5分ほどの立地で交通アクセスは比較的良好です。また箱根温泉が近く、仕事終わりに温泉に行く先生もいます。

これから専門医として高みを目指そうとしている先生方にとって、当院での研修がその後の飛躍に結びつくよう指導いたします。`,
  },
  {
    name: "横須賀市立市民病院",
    category: "affiliate",
    representatives: [{ name: "小松 和人", title: "消化器内科部長・副病院長" }],
    message: `横須賀市立市民病院は病床数482床（感染症病床・回復期リハ病棟・地域包括ケア病棟を含む）です。病院全体では一般病棟は実質220床ほどで運用しています。消化器内科としては、25～35名程が入院しています。消化器内科医師は2022年4月からは5人体制となります。

当院は、三浦市・横須賀市南西部地区の基幹病院としての役割を担っており、消化器内科としては、1日24時間、365日体制で、吐下血・胆道系疾患・イレウスなどの緊急治療に対応しています。時間外の緊急内視鏡検査に関しては、内視鏡に慣れた看護師・MEのオンコール体制も整っており、内視鏡の準備・介助・片付けをしていただいています。

毎週火曜日及び水曜日の午後には、胆膵の指導医の先生を大学から派遣していただき、胆膵検査・治療の指導に当たっていただいています。

今年度には内視鏡室の移転が行われ、2022年5月中旬には新内視鏡室が稼働します。新内視鏡室の検査台は3台と変わりませんが、広さは従来の内視鏡室の約1.5倍になります。内視鏡の前処置室・リカバリー室・待合室などが一つの内視鏡区画にまとまるため、患者さんの入れ替え・介助もスムーズに行われ、検査件数の増加が見込まれます。

当院は、検査科・薬剤師・放射線科・ME・リハビリ・連携室・事務職員との関係も良好で、ストレスなく非常に働きやすい環境になっています。伸び伸びと診療に当たり、かつ実力をつけていきたいと考えている人には最適の病院と思っています。`,
  },
  {
    name: "秦野赤十字病院",
    category: "affiliate",
    representatives: [{ name: "三浦 雄輝", title: "第二消化器内科部長" }],
    message: `秦野赤十字病院は、秦野市内秦野盆地の南高台上に位置する日本赤十字社神奈川県支部が運営する、中規模の総合病院です。地上7階地下1階の本館と地上3階の新棟からなり、320床の一般病床を有します。最寄り駅の小田急小田原線秦野駅からは徒歩18分、バスだと9分かかります。東名高速道路の秦野中井ICからほど近く、横浜まで車で49分とまずまずのアクセスです。

平成29年1月から令和6年3月まで同門の田中克明先生が院長を務められ、秦野市のフラッグシップ病院として、救急科の新設、秦野市救急ワークステーションの開設、血管撮影室の増設、手術支援ロボット「da Vinci」の導入などが実行され、急性期医療に積極的に取り組んでいます。日本赤十字社の一員として、また、神奈川県の災害医療拠点病院として日赤救護班、DMATの活動や災害訓練などの災害救護活動を行っていることも大きな特徴です。

消化器内科は、三浦は胆膵、榊原医師は消化管領域を専門とし、白倉医師、古川医師とともに消化器疾患全般を広く診療しています。そのほか横浜市大と東海大から非常勤医師の派遣、指導を受けています。令和元年10月には「消化器病センター」を開設し、外科とカンファレンスなどを通じて緊密で質の高い連携を目指しています。現在外科には2人の日本内視鏡外科学会技術認定医が在籍しており、協働してLECS（腹腔鏡内視鏡合同手術）を行うなど、協力体制を築いています。

後期研修については、1年目は上部内視鏡300件以上、2年目は下部内視鏡180件以上を目標にしています。2年目からはERCPの術者となります。また、血管造影は東海大学の放射線科医から直接指導をうけることが出来ますし、生理検査技師の下でエコーの勉強も可能です。2年目からは研修日があり、大学病院での研修など、次のキャリアステップを見据えるための活動もサポートしています。

規模が大きい病院ではないため、医師の人数も少なく症例数も限られていますが、消化器領域の症例数は増え続けており、一人当たりの検査件数も多いです。若手の医師には早い時期から術者などの重要な役割を担っていただいており、困ったときはいつでもサポートができるよう体制を整えています。`,
  },
  {
    name: "大和市立病院",
    category: "affiliate",
    representatives: [{ name: "亀田 亮", title: "消化器内科医長" }],
    message: `大和市立病院は横浜市の隣、大和市の中核をなす403床の総合病院です。最寄り駅は小田急線の鶴間駅（徒歩10分ほど）ないしは相鉄線の大和駅（バスがありますが徒歩で25分ほど）になります。東名・保土ヶ谷バイパスの横浜町田ICからも近く、横浜・東京都心へのアクセスも良好です。

公立病院で、身分は大和市職員になります。時間外手当がきちんと出るので、給料も比較的良好です。

消化器内科スタッフは現在7名で、うち4名（後期研修医2名含む）が横浜市大消化器内科学教室からの派遣になります。出身母体はバラバラですが、科内の仲はよく、和気あいあいと助け合って診療を行っています。お互いにフォローしあっているので、休みも取りやすいです。他科、多職種との連携も良好です。多くの科が横浜市大の医局からの派遣になります。これまで勤務された先生からは働きやすい職場との御評価を頂いています。

急性期病院ですので、救急疾患は豊富です。3名ががんセンター出身ですので、癌診療も積極的に行っています。ESD（食道・胃・大腸3臓器で年間130件程度です）・ERCP・PTCD・RFA・各種ステント留置などの手技や抗癌剤治療（食道癌・胃癌・大腸癌・膵臓癌・胆道癌など）・放射線治療なども積極的におこなっています。各人の習熟度を見ながらですが、なるべく積極的に手技も経験してもらっています。

是非、大和市立病院に来て下さい。一緒に楽しく仕事をしましょう。`,
  },
  {
    name: "川崎市立井田病院",
    category: "affiliate",
    representatives: [{ name: "山田 博昭", title: "消化器内科" }],
    message: `当院は川崎市中原区に位置する病床数383床の地域基幹病院です。平成27年に新病棟が開院されたばかりであり病院は新しく、日吉駅からバスで5分ほどの位置にあるためアクセスは比較的良好です。当院の全体的な特徴として、緩和ケア病棟を有するなど地域がん診療拠点病院としてがん診療に力を入れている他、結核病棟があるなど感染症診療においても充実した体制を構築しております。一方で、地域包括ケア病棟をもつなど回復期医療にも重点を置いていることも特徴といえます。

当院は2023年度より当教室の関連施設となりました。2024年4月現在、消化器内科医師は10名（うち専攻医5名）であり、当教室からは4名（専攻医2名）が派遣されています。当教室以外からも、当院プログラムや他大学のプログラムにより毎年多くの専攻医の先生がローテートしております。

専攻医の先生はcommon diseaseから、癌に対する全身化学療法や緩和医療、内視鏡治療症例まで、多彩な症例を学ぶことができると思います。消化器疾患以外の一般内科疾患も多く経験できるため、新専門医制度で必要となる症例も多く経験できると思います。また、中規模病院ならではの特徴ですが、各科の垣根が低く、他科との連携が非常にスムーズです。さらに緩和ケア科常勤医師が多く、終末期癌医療における疼痛コントロールなどを直接学べる機会も多いのも強みです。

検査・手技面では我々は上下部内視鏡をはじめ、ESD、ERCP、PTGBD、肝生検などの処置を中心に行なっております。吐下血や胆道系疾患に対する緊急処置を行う機会も多く、その場合は上級医の指導のもと若手の先生にできる限り施行していただくようにしております。さらに腹部血管造影については慶應大学病院の放射線科医師から直接指導を受けることができ、臨床検査技師の元で直接超音波検査の指導を受けることが可能です。

また福利厚生も非常に充実しており、それぞれの希望する働き方に応じて柔軟に対応していくことが可能です。このように専攻医の先生に対する指導体制やサポート体制は非常に充実していると自負しておりますので、ご興味があれば是非見学にいらしてください。`,
  },
  {
    name: "大森赤十字病院",
    category: "affiliate",
    representatives: [{ name: "井田 智則", title: "消化器内科副部長" }],
    message: `【所在】東京都大田区中央
最寄り駅：JR京浜東北線大森駅よりバスで7分程度（徒歩20〜30分）

【歴史】1953年に日本赤十字社東京都支部が設置する病院としては武蔵野赤十字病院に次いで都内2ヶ所目の病院として開設。2012年に新病院オープン。

【施設】急性期344床、ICU 6床、HCU 12床

【消化器内科スタッフ】
・部長2名、副部長1名、医員8名（うち1名時短勤務）、専攻医4名
・当教室派遣2名、他教室派遣9名、院内就職4名
・所属に関係なく診療業務や指導をおこなっております
・3チームによる複数主治医制（肝胆膵1チーム、消化管2チーム）

【資格】
・日本消化器病学会専門医10名（うち指導医3名）
・消化器内視鏡学会専門医10名（うち指導医2名）
・肝臓学会専門医5名（うち指導医・暫定指導医3名）

【診療内容】
・消化管内視鏡診療（食道、胃、十二指腸、大腸ESD等）
・胃SMTに対する腹腔鏡内視鏡合同胃局所切除術（LECS）
・肝癌診療（ラジオ波焼灼術、化学療法、血管造影等）
・胆膵内視鏡診療（ERCP関連手技、EUS等）
・その他消化器内科一般

【2023年の主な診療実績】
・ESD 344件（上部140件、下部204件）
・ERCP 208件
・EUS 201件（FNA 24件、EUS-CD 1件）
・RFA 57件

肝癌治療や消化管ESDに関しては全国レベルの実績があります。内視鏡診療は週一回の内視鏡カンファレンスとESD術前術後のカンファレンスを行っており、レベルの高い内視鏡診療が習得できます。

胆膵領域は、早期膵がんの診断、各種胆道ドレナージ、EUS intervention、化学療法など幅広く診療経験を積むことができます。

学会活動や論文執筆の実績が豊富な医師が多く、アドバイスできる環境が整っており、意欲と熱意さえあればその分野のエキスパートがしっかりと指導します。

当直や救急当番は大変かもしれませんが、個性豊かなスタッフと一緒にたくさんの症例を勉強して頂ければと思います。`,
  },
]

export default function VisitPage() {
  const ref = useScrollReveal()
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null)

  const toggleFacility = (name: string) => {
    setExpandedFacility(expandedFacility === name ? null : name)
  }

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[#0C2340] py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-[#C4923A] italic">
              Visit & Consultation
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
              見学・入局相談
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
              消化器内科学は、必要不可欠な多くの臓器にまたがる、重要かつ大変やりがいのある領域です。
              当教室では、目覚ましい発展を遂げる消化器内科領域の診療・研究に関して、
              最先端に位置する教育を受けることが可能です。
              当教室で、医師として充実した人生を過ごして頂くことを、教室員一同、心から願っています。
            </p>
          </div>

          {/* Quick Links */}
          <div className="reveal-stagger mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#seminar"
              className="reveal-child flex items-center gap-2 rounded-full bg-[#C4923A] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#E8B96A] hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              教室説明会
            </a>
            <a
              href="#online"
              className="reveal-child flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" />
              オンライン相談会
            </a>
            <a
              href="#facilities"
              className="reveal-child flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Building2 className="h-4 w-4" />
              関連施設メッセージ
            </a>
          </div>
        </div>
      </section>

      {/* ---- 2026年度 教室説明会 ---- */}
      <section id="seminar" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-[#2A8B8B] italic">
              Information Session
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
              2026年度 教室説明会・オンライン相談会
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* 第2回 教室説明会 */}
            <div className="reveal rounded-2xl border-2 border-[#C4923A]/30 bg-gradient-to-b from-[#C4923A]/5 to-transparent p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C4923A]/15">
                  <Calendar className="h-6 w-6 text-[#C4923A]" />
                </div>
                <div>
                  <span className="rounded-full bg-[#C4923A] px-3 py-1 text-xs font-bold text-white">
                    ハイブリッド開催
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                第2回 教室説明会
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                消化器内科医を志している方、当教室に少しでも興味がある方は、この機会にぜひご参加ください。
                説明会の後半で専攻医の先生方に気軽に質問いただけるお時間も用意しております。
                また、説明会後には懇親会を予定しています。
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">開催日時</p>
                    <p className="text-sm text-muted-foreground">2026年5月22日（金）19:00〜</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">会場</p>
                    <p className="text-sm text-muted-foreground">
                      横浜市立大学みなとみらいサテライトキャンパス<br />
                      横浜ランドマークタワー7F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">オンライン</p>
                    <p className="text-sm text-muted-foreground">
                      ZOOM参加をご希望の方には、開催前日にURLを送付いたします
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScaoiaQDuL1atz63gYTYWs-fOdCjSUgBr9hUp11q5xryMvOfA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
              >
                事前登録はこちら
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* オンライン相談会 */}
            <div id="online" className="reveal rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A8B8B]/10">
                  <ExternalLink className="h-6 w-6 text-[#2A8B8B]" />
                </div>
                <div>
                  <span className="rounded-full bg-[#2A8B8B] px-3 py-1 text-xs font-bold text-white">
                    オンライン開催
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                第4回 教室オンライン相談会
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                こちらは説明会よりは小規模で開催させていただいており、毎月開催しております。
                運営委員長との個別相談の場として考えております。
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#2A8B8B]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">開催日時</p>
                    <p className="text-sm text-muted-foreground">2026年4月22日（火）19:00〜</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#2A8B8B]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">形式</p>
                    <p className="text-sm text-muted-foreground">
                      ZOOMでの開催（現地開催はございません）<br />
                      開催前日に参加者へURLをメールでお送りします
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfoDAmNUKdLXiH3PDX07Be8UHqkAJyZgf9TVdklTg5-ATWiiA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#2A8B8B] px-6 py-3 text-sm font-bold text-[#2A8B8B] transition-colors hover:bg-[#2A8B8B] hover:text-white"
              >
                事前申込はこちら
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---- お問い合わせ先 ---- */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-[#C4923A] italic">
              Contact
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
              お問い合わせ先
            </h2>
          </div>

          <div className="reveal mt-10 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">所在地</p>
                <p className="mt-2 text-sm text-white/90">
                  〒236-0004<br />
                  横浜市金沢区福浦3-9<br />
                  横浜市立大学 医学部<br />
                  臨床研究棟4F 消化器内科学教室
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">教室運営委員長</p>
                <p className="mt-2 text-sm text-white/90">
                  入江 邦泰（いりえ くにやす）
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="mailto:k_irie@yokohama-cu.ac.jp"
                    className="flex items-center gap-2 text-sm text-[#C4923A] hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    k_irie@yokohama-cu.ac.jp
                  </a>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Phone className="h-4 w-4" />
                    045-787-2800（代表）
                  </div>
                  <p className="text-xs text-white/50">PHS: 5476</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 関連施設からのメッセージ ---- */}
      <section id="facilities" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-[#2A8B8B] italic">
              Messages from Affiliated Facilities
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
              関連施設からのメッセージ
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              当教室への入局を志す先生方へ、各関連施設からのメッセージです。
              各施設をクリックすると、代表者からのメッセージをご覧いただけます。
            </p>
          </div>

          {/* 拠点病院 */}
          <div className="reveal mt-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#C4923A]">
              拠点病院 Hub Hospitals
            </h3>
            <div className="space-y-4">
              {facilityMessages
                .filter((f) => f.category === "hub")
                .map((facility) => (
                  <div
                    key={facility.name}
                    className="rounded-2xl border-2 border-[#C4923A]/20 bg-gradient-to-r from-[#C4923A]/5 to-transparent overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFacility(facility.name)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#C4923A]/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C4923A]/15">
                          <Building2 className="h-6 w-6 text-[#C4923A]" />
                        </div>
                        <div>
                          <p className="font-serif text-lg font-bold text-foreground">
                            {facility.name}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                            {facility.representatives.map((rep) => (
                              <p key={rep.name} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <User className="h-3.5 w-3.5" />
                                {rep.name}
                                <span className="text-xs">（{rep.title}）</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#C4923A] transition-transform ${
                          expandedFacility === facility.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFacility === facility.name && (
                      <div className="border-t border-[#C4923A]/10 bg-white/50 px-6 py-5">
                        <div className="prose prose-sm max-w-none text-foreground">
                          {facility.message.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="mb-4 last:mb-0 text-sm leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* 協力病院 */}
          <div className="reveal mt-10">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#2A8B8B]">
              協力病院 Affiliate Hospitals
            </h3>
            <div className="space-y-4">
              {facilityMessages
                .filter((f) => f.category === "affiliate")
                .map((facility) => (
                  <div
                    key={facility.name}
                    className="rounded-xl border border-border bg-card overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFacility(facility.name)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2A8B8B]/10">
                          <Building2 className="h-5 w-5 text-[#2A8B8B]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-foreground">
                            {facility.name}
                          </p>
                          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                            {facility.representatives.map((rep) => (
                              <p key={rep.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                                <User className="h-3 w-3" />
                                {rep.name}
                                <span>（{rep.title}）</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                          expandedFacility === facility.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedFacility === facility.name && (
                      <div className="border-t border-border bg-muted/30 px-5 py-4">
                        <div className="prose prose-sm max-w-none text-foreground">
                          {facility.message.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="mb-3 last:mb-0 text-sm leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-[#F4F7FA] py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-serif text-2xl font-bold text-[#0C2340]">
              見学・相談のお申込み
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              見学・オンライン相談は随時受け付けております。お気軽にお申し込みください。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScaoiaQDuL1atz63gYTYWs-fOdCjSUgBr9hUp11q5xryMvOfA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
              >
                説明会に申し込む
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:k_irie@yokohama-cu.ac.jp"
                className="inline-flex items-center gap-2 rounded-lg border border-[#0C2340] px-8 py-3 text-sm font-bold text-[#0C2340] transition-colors hover:bg-[#0C2340] hover:text-white"
              >
                <Mail className="h-4 w-4" />
                メールで問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
