"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Quote, MapPin, GraduationCap, Calendar, Plane, FlaskConical, Stethoscope, ChevronDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ---- Voice データ ---- */
interface VoiceData {
  id: string
  category: "junior" | "mid-career" | "abroad"
  name?: string
  year: string
  affiliation: string
  university?: string
  highlight: string
  message: string
}

const voices: VoiceData[] = [
  {
    id: "v1",
    category: "junior",
    year: "令和2年卒・専攻医2年目",
    affiliation: "横浜南共済病院",
    university: "杏林大学医学部卒",
    highlight: "指導の手厚さとやさしさ、学びはピカイチ",
    message: `私は杏林大学医学部卒業後、大森赤十字病院で1年、横浜市立大学附属病院で1年、初期研修医を行い、横浜市立大学消化器内科学教室へ入局しました。

卒業した自大学への入局も考えていましたが、当教室で研修を回った際の居心地のよさ、雰囲気のよさに惹かれ当教室の入局を決めました。一緒に仕事をするなら、学ぶならここがいいと思える先生方がたくさんいらっしゃいます。

現在は専攻医として横浜南共済病院で研修させていただいております。当院ではチーム制を敷いているため、主治医として担当する患者を多数抱えながらも上級医の温かく的確なサポートを受けることができます。

また、内視鏡処置や関連症例も多く、入局1年目で出血対応、ERCP、PTGBD、胃瘻造設など多岐にわたる処置を経験させていただきました。初めての手技も上級医の指導のもと行わせていただき、緊張がありながらも安心して経験を積むことができております。

指導の手厚さとやさしさ、学びはピカイチだと思います。若輩で迷惑をかけてばかりですが、感謝しかありません。本当にいい病院、医局です。こうした環境で皆様とご一緒できることを楽しみにしています。少しでも消化器内科に興味があれば、是非一度消化器内科教室に見学に来て、実際に雰囲気を感じてください。`,
  },
  {
    id: "v2",
    category: "junior",
    year: "平成31年卒・専攻医3年目",
    affiliation: "横浜市南部病院",
    university: "横浜市立大学卒",
    highlight: "目標にしたい先生方ばかり",
    message: `私は横浜市立大学を卒業後、初期研修を藤沢市民病院で行い、当教室へ入局しました。消化器内科の中での専門分野は決めていなかったので、どの分野も充実している当教室へ入局を決めました。後期研修1-2年目を藤沢市民病院で行い、現在は済生会横浜市南部病院で勤務しております。

藤沢市民病院では充実した救命救急センター・他科、コメディカルの方々のフットワークの軽さにより、患者さんに関わる皆で一丸となって診療にあたることができました。主治医+チーム制であり、主治医・処置の術者としての責任を自覚しながら、上級医への相談もしやすい環境でした。早くから専門とする分野をどこにするか考える機会も頂きました。

胆膵疾患の診療をより深く学ぶため、済生会横浜市南部病院への異動を叶えて頂きましたが、充実した日々になる予感がしています。

これまでお世話になった上級医の先生方にはそれぞれ魅力があり、目標にしたい先生方ばかりです。また同期や学年の近い先輩後輩が努力家であり、共に励むことができています。

専門家として一人前になるまでの道のりは果てしないですが、当教室でなら頑張っていけると思っています。是非一度見学にお越しください。皆様と一緒に働ける日を楽しみにしております。`,
  },
  {
    id: "v3",
    category: "junior",
    year: "平成18年卒",
    affiliation: "藤沢市民病院",
    highlight: "子育てと常勤医を両立",
    message: `私は横浜市大での臨床研修を終了後、約3年間藤沢市民病院に勤務しました。藤沢市民病院は藤沢市の中核病院であり、非常に症例も豊富です。私はこの3年間で様々な症例を経験し、消化器内科医としての考え方、技術などをたたき込んで頂きました。3年間で学んだことは消化器内科医として、医師として基板となっていると感じています。

また上司には常日頃、自分の武器を見つけろと言われ、幸いにも日常診療を行っていく中で、私は自然と癌治療に興味を持つようになりました。そのような経緯もあり、その後の2年間は神奈川県立がんセンター肝胆膵内科で働く機会を頂きました。ここでは市中病院で経験出来ないような、癌の最先端の治療等を学ぶ事が出来ました。しかし、学んだ事を市中病院で活かしたいとの思いが強く、その後再度藤沢市民病院へ戻り現在に至ります。

私は、消化器内科医5年目の時に結婚し、8年目の時に長女、10年目の時に次女を出産しました。この間、家族・同僚の協力を得ながら、また日当直・オンコール等の調整を行うなどしながら、現在に至るまで急性期病院である藤沢市民病院で常勤医として勤務を続けてきました。

女性医師は結婚、妊娠、出産を契機に働き方を変えざる終えない時期があります。もちろん一時子育てに専念するということがあってもいいと思います。色々な考え方があると思いますが、結婚・出産 = 一線を退かなくては医師を続けられない、ということは無いと思います。

先日、長女の保育園の卒園式で、長女に「小さいころから一緒にいてくれてありがとう」と声をかけてもらいました。次女は5歳になりましたが、大きくなったら病院の人になる!と言ってくれます。私は、自身のキャリアを優先することで、子供達に迷惑をかけてしまっていると負い目を感じている部分がありましたが、これをきっかけに続けてきて良かった。子供達は子供達なりに、自分が頑張って働いているのを分かってくれていたのかなと感じました。

子供は確実に親離れしていきます。母親には母親の人生があります。やりたい事を追求することは決して悪いことではありません。もし子育てしながら第一線で働きたいと考えている方がおられれば是非一緒に働きましょう。みなさんとお会い出来ることの楽しみにお待ちしています。`,
  },
  {
    id: "v4",
    category: "mid-career",
    year: "平成21年卒",
    affiliation: "横浜市立大学附属病院",
    university: "順天堂大学卒",
    highlight: "教授に恋愛相談をはじめ人生相談ができる医局",
    message: `私は順天堂大学を卒業し、神奈川県の急性期病院で初期研修を終了しました。初期研修修了の際には消化器内科あるいは消化器外科のいずれに専門を絞るか決めきれずにいたため、入門を見送りました。そこで、初期研修を終了した施設で、後期研修医として市中病院で内科医としても外科医としても研鑽を積むことを選択しました。

後期研修の1年間は、自身の適正や学問的興味の方向性と向き合うことができた大変実りの多いものでした。その中で、消化器疾患の奥深さや多様性に触れるうち、特に炎症性腸疾患の診療に興味を持つようになり、さらに学び先進治療に触れたいと思うようになりました。

多くの医局の中で当教室に入門した理由は、三点あります。一つめは地元である横浜で生きるための将来設計の一環として、二つめはIBDセンターを有していたこと、三つめは多くの関連病院を有し多様な後期研修教育を受けられることです。

入局後は、センター病院と足柄上病院で後期研修を修了したのち、足柄上病院で一般消化器診療に携わりながら、IBDセンターや神奈川県立がんセンターに定期的に勉強しに行かせていただく機会を頂きました。やがて、多くの先生の指導により刺激を受けるうちに、診療だけでなく医学研究に興味を持つようになり、大学院に進学しました。北里研究所病院の炎症性腸疾患先進治療センターに国内留学し、専門診療を学び臨床研究に携わらせていただきました。現在は、附属病院に勤務し、臨床研究や後進の育成に携わっていきたいと考えています。

というのは、表向きの話。我が医局員は変な人も楽しい人も沢山いて、見ていて飽きません。様々な大学から人が集まるためバックグラウンドが多種多様で、それだけでも異文化交流です。教授に恋愛相談をはじめ人生相談ができる医局は他にはなかなか無いようです。

もちろん、働くことは楽しいことばかりではなく、嫌なことも辛いことも大なり小なりあるでしょう。大人ですから。そんな時に、私は医局の仲間たちに支えられています。多分、たまには支えたりもしています。そんな親しみやすい当教室に、消化器内科医を志す皆様をお迎えできることを楽しみにしています。`,
  },
  {
    id: "v5",
    category: "mid-career",
    year: "平成22年卒",
    affiliation: "横浜市立大学附属市民総合医療センター",
    university: "山口大学卒",
    highlight: "「やりたいことは必ずやらせる」という心強い言葉",
    message: `私は山口大学を卒業し、千葉県・神奈川県の急性期病院で初期研修・後期研修を終えました。

入局をせずに市中病院で勤務する選択肢もありましたが、消化器内科医として専門性を高めたいという思いがあり、医師6年目で当教室に入門しました。数ある医局の中で当教室に入門した理由は、私の目標を応援してくれる医局であると思ったからです。

私の目標は、消化管疾患の専門的治療ができる医師になるということでした。もともと早期癌に対する内視鏡治療(内視鏡的粘膜下層剥離術:ESD)をやりたいという思いがあり消化器内科医になりましたが、それに加え、後期研修の中で、炎症性腸疾患(IBD)の診療の重要性も実感し、ESDだけでなくIBDも学びたいと思うようになりました。

当教室の市民総合医療センターは、日本でも有数のESDとIBDの症例数を誇る施設であり、この施設で研修をしたいと強く思いました。入局前に、前田愼教授にその思いをお伝えした際に、「やりたいことは必ずやらせる」という心強いお言葉をもらったことが、この教室に入門する大きな決め手になったことを覚えています。

入門後は、前田教授をはじめ医局長・部長の先生方のご高配もあり、市民総合医療センターのIBDセンターで3年間勤務した後に、消化管チームに移ってESDの研鑽を積ませていただいております。その間に大学院にも入学し、臨床・研究と忙しくも非常に充実した生活を送っており、目標に少しずつ近づいていると実感しています。

もちろん、目標や希望は人それぞれですし、やりたいことが見つからないという先生方もおられるかと思いますが、当教室は「やりたいこと」をかなえてくれる、「やりたいこと」を一緒に模索してくれる教室だと思っております。

また、これも重要なことですが、当教室は、入局時期はもちろん、出身大学や研修先は関係なく、非常に居心地のいい教室です。我々と一緒に当教室、そして神奈川県の医療を支えて頂ければ、大変嬉しく思います。`,
  },
  {
    id: "v6",
    category: "mid-career",
    year: "平成19年卒",
    affiliation: "横浜市立大学附属病院",
    university: "福島県立医科大学卒",
    highlight: "「外様」を感じたことは一度もない",
    message: `私は、平成19年に福島県立医科大学を卒業し、神奈川県内の病床数400床弱の市中病院で2年間の初期研修を終えた後、同院で消化器内科医として就職し3年間勤務しました。その間将来的に内視鏡治療の分野において更に研鑽を積みたいと思うようになり、当時勤務していた施設でESD（内視鏡的粘膜下層剥離術）を行っていなかったことや医師としての自分の力を外で試してみたいという気持ちの芽生えが後押ししたこともあり同施設を退職し当教室に入門する決意をしました。

横浜市立大学消化器内科学への入門を選択したことに関しては、(1)関連病院が神奈川県内に多く、特に横浜市の中核となるような病院が多いこと、(2)他大学出身者が大半を占めること、(3)自分のように医師3年目以降の入門者も少なからずいることなどの理由の他に市民総合医療センター（以下センター病院）の存在が大きかったように記憶しています。

センター病院はESDの件数もさることながら、研究に加え各領域のグループに分かれて専門的な診療・治療を行っているなど大学病院としての特徴を備えつつ、一般病院に近いような臨床的要素をも多く持つ病院であり、臨床医としてのステップアップを考えていた自分にとってはとても魅力的な病院でした。

医師6年目で消化器内科学に入門し、同年から運良くセンター病院・消化器病センターの消化管グループに配属となりました。入門時には他の肝臓・胆膵グループなどのローテートを希望しておりましたが、入門後半年ほど経過した頃に教授から消化管専門でやっていくことと臨床をしながら大学院生として学位取得を目指す選択肢を御提案頂いたこともあり、ESDを中心に消化管専門の消化器内科医として研鑽を更に積むことを決め、更に翌年より大学院（医学研究科博士過程）に入学をしました。

3年間センター病院で内視鏡医として勤務した後、平成27年度より横浜市立大学附属病院で勤務をすることとなり現在に至ります。内視鏡治療に関しては少しずつではありますが後進の指導にも携われるようになり、また新たな刺激や楽しみを見いだすと共に更なる自らの飛躍と進歩の必要性を実感する毎日を送っています。

実際に知り合いもおらず医師6年目で入門した「外様」ですが、これまでのところ短い期間ではありますが歩んできた道に後悔はなく、「外様」を感じたこともありません。どこかで自分の力を試したいと考えている先生、更に自分を高められる環境を求めている先生、自分に合う専門分野を模索している先生、大学院への進学を考えている先生、研究がしたい先生、臨床をもっと突き詰めたい先生、どんな理由であれ当消化器内科学教室は多種多様な考え方に可能な限り寄り添い、今だけでなく将来を見据えた様々なニーズに答えられる教室だと思います。いつでも門戸は開かれています。`,
  },
  {
    id: "v7",
    category: "abroad",
    year: "平成20年卒",
    affiliation: "横浜市立大学附属市民総合医療センター",
    highlight: "カナダ・トロント大学へ臨床留学",
    message: `私は2019年から2021年まで2年間、カナダのトロントで海外臨床留学しましたので報告させていただきます。

まずはじめに、皆さん留学に関して漠然としたイメージをお持ちかと思いますが、留学は大まかに分けて国外留学、国内留学があり、またそれぞれ臨床留学、基礎研究留学の二つがあります。もちろん学びたい内容によりますが、やはり異文化の世界に飛び込む国外留学のハードルはより高いのではないでしょうか。

さらに臨床留学となると、その国の医師免許の取得が必要な場合が多いです。そのような中、カナダは移民が多く異文化に寛容で、トロント大学のfellowship programも世界から多くの医師を受け入れております。さらにこのプログラムは、臨床に必要な医師免許はそれぞれの出身国の医師免許を用いるため、カナダで医師免許証の取得の必要なく、臨床の場で医療に携わることができます。

私はTherapeutic endoscopy fellowとして、St. Michael's Hospitalで内視鏡診療を中心に行い、同期は5人で、それぞれアルゼンチン、チリ、オーストラリア、日本と様々で垣根なく診療に取り組むことができました。

私自身、留学前に市民総合医療センターで消化管を中心に勉強してきましたが、カナダではバレット食道焼灼や憩室切開術、全層切除、アカラシアのPOEMなど自分が経験したことがない医療も多くやっており、他にも胃静脈瘤に対するEUS CoilingやGastric Outlet Obstructionに対する胃空腸ステントバイパスなどのinterventional EUS、ERCPも多く経験することができました。また臨床の合間に論文の執筆もできました。

内視鏡分野においては日本が一番と思われている方も多いですが、海外から日本の内視鏡技術は高く見られている一方で、日本も海外から学ぶべき技術や考え方が多くあります。医療界でも国際的な人材が求められる中、海外留学は大変有意義なものになると思います。海外の医療を勉強してみたい方や一般消化器内科を習得してさらなる専門領域を勉強したい方いらっしゃいましたら、ぜひ一度相談ください。`,
  },
  {
    id: "v8",
    category: "abroad",
    year: "平成29年卒",
    affiliation: "理化学研究所 先端医化学研究センター",
    highlight: "IBDを治す医師になりたい - クローン病患者から医師へ",
    message: `自分が当教室への入局を決めた理由は、自分の生涯をかけたテーマとして、炎症性腸疾患(IBD)に関わる仕事に携わりたいと考えたからです。僕自身、15歳の頃にクローン病と診断され、3ヶ月以上の入院生活を経験しました。将来IBDを治す医師になりたいと思い、医学部へ進学しました。

当教室には国内最大規模のIBDセンターがあり、医学部在学中から前田教授、国崎先生にお世話になっていたこともあり、迷うことなく当教室へ入局を決意しました。その後、臨床医としてIBD診療に携わってきましたが、臨床研究だけではIBDを根治することはできないと痛感し、現在は大学院生として理化学研究所へ国内留学させていただき、腸内細菌と炎症性疾患の関連性について研究を行っています。

皆さんはどんな医師になりたいと思い、医師を志しましたか?中には海外留学を志す人もいれば、基礎研究をやりたい人、最先端の医療に興味がある人や地域診療に惹かれる人もいたりと、皆さんの叶えたい夢は異なることと思います。簡単に叶わないからこそ"夢"であり、挑戦し続ける価値があります。

その過程では様々な困難を経験しますし、難しい選択を乗り越えていく必要があります。上手くいくこともいかないこともありますが、医局の存在は常に自身の挑戦の支えになります。どんな選択・挑戦をしようと誰かが必ず理解してくれ、応援し、力を貸してくれる環境はそう多くありません。たとえ大きな壁にぶち当たったとしても、多くのサポートをしてくれます。

僕自身が臨床を離れる際にも多くの先生方が応援してくださり、こうして今現在も夢への挑戦を続けることが出来ています。是非みなさんにも当教室でさまざまな経験をし、理想の医師に近づくための努力を続けていただけると非常に嬉しく思います。`,
  },
  {
    id: "v9",
    category: "abroad",
    year: "平成29年卒",
    affiliation: "国立がんセンター中央病院",
    university: "島根大学卒",
    highlight: "この医局の強みは「人」",
    message: `私は島根大学を卒業後、センター病院で初期研修を行い消化器内科学教室へ入局しました。その後は横須賀市立市民病院で2年間研修をした後に附属病院とセンター病院に半年ずつ勤務させていただきました。

専攻医の3年間が終わって思うことは、私は消化器内科医になって、またこの医局に入局して大正解だったということです。横須賀市民病院では消化器疾患だけでなく、一般内科としての診療も多く経験しました。初めての主治医、初めての外来、初めての書類仕事など、わからないことだらけでしたが沢山のご指導を頂き医師としても、人としても成長できた2年間だったと感じています。

そして3年目の附属病院とセンター病院での勤務は、自分の未熟さを痛感する毎日でした。各分野のspecialistの先生方の診療を間近で拝見し、自分のアセスメントの浅さや処置の下手さに嫌になりそうでしたが、上級医の先生方の温かい励まし・ご指導のおかげで、多くのことを楽しみながら学ぶことができました。

私はこの医局の強みは「人」だと思っています。いつも温かく、時に厳しくご指導くださる(でも飲み会では楽しく!)先輩、他愛もない話も真面目な話もできる同期、病院が変わっても飲みに誘ってくれる後輩。3年間で出会えた人との縁は人生の宝物と言っても過言ではありません。

そんな人達に囲まれて伸び伸びと研修をさせて頂き、自分なりに悩みましたが今後は化学療法を専門にしていきたいと思うようになりました。お忙しい中面談の時間を作ってくださり、国立がん研究センター中央病院へ勉強に出してくださった前田教授には感謝申し上げます。さらに「辛かったら戻っておいで」と声をかけて下さり肩の力が抜けたのを覚えています。

最後に研修医の先生方にお伝えしたいことは、社会に出れば色々な人がいますし、いいことばかりではありません。ですがそんなときに頼れる仲間がここにはいます。大丈夫です。少しでも興味が湧いた方はぜひ一度教室見学へ出かけてみてください。どこかでお会いできることを楽しみにしております!`,
  },
  {
    id: "v10",
    category: "abroad",
    year: "平成22年卒",
    affiliation: "横浜市立大学附属市民総合医療センター",
    highlight: "国立がん研究センター中央病院へ国内留学",
    message: `悪性腫瘍に対する化学療法の臨床と研究、がん薬物療法専門医資格の取得を目的に、2015年4月より2018年3月まで国立がん研究センター中央病院の内科レジデントとして国内留学する機会を与えていただきました。

きっかけは後期研修を終えた後の進路について考えた際に、消化器内科医として自らの武器となる分野を持ちたいと考え、以前より興味があった、がんの診断・治療を専門的に学びたいと考えました。研修先として国立がん研究センター中央病院を選んだ理由は、以前に医局の先生方が国立がん研究センターで研修されていたこと、現在も横浜市大出身の先生方が活躍されていることでした。

3年間の研修では内科の各診療科を3ヶ月ずつローテーションし、がん薬物療法専門医資格取得のための症例を経験しつつ、様々な臓器の悪性腫瘍の診断・治療について、国内で指折りの専門家の先生方から学ぶことができました。また、研修中には、海外学会も含めた発表機会や論文執筆の機会をいただくことができました。

加えて、抗がん剤治療以外にも内視鏡や腹部エコーについても、日本を代表する先生方から学ぶ機会が得られました。国内有数のがん専門施設での研修は、求められているレベルの高さに苦労することもありましたが、様々な診療科の診断・治療戦略の立て方や研究に対する姿勢を学ぶことができ、得られたものは大変大きかったです。

研修で得られた経験を当教室に持ち帰り、悪性腫瘍に対する化学療法の臨床と研究の発展に還元したいと考えています。最後になりましたが、このような機会を与えて下さいました横浜市大消化器内科学教室には感謝を申し上げます。`,
  },
]

const categoryInfo = {
  junior: { 
    label: "先輩医師からのメッセージ", 
    sublabel: "若手医師の声",
    icon: Stethoscope, 
    color: "teal",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    borderColor: "border-teal/30",
  },
  "mid-career": { 
    label: "後期研修中もしくは終了後に入門した医師", 
    sublabel: "途中入局の声",
    icon: GraduationCap, 
    color: "gold",
    bgColor: "bg-gold/10",
    textColor: "text-gold",
    borderColor: "border-gold/30",
  },
  abroad: { 
    label: "留学のすすめ", 
    sublabel: "留学経験者の声",
    icon: Plane, 
    color: "navy",
    bgColor: "bg-navy/10",
    textColor: "text-navy",
    borderColor: "border-navy/30",
  },
}

/* ---- VoiceCard Component ---- */
function VoiceCard({ voice }: { voice: VoiceData }) {
  const [expanded, setExpanded] = useState(false)
  const cat = categoryInfo[voice.category]
  const Icon = cat.icon

  return (
    <div className={`reveal-child rounded-2xl border-2 ${cat.borderColor} bg-card p-6 shadow-sm transition-all hover:shadow-md`}>
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cat.bgColor}`}>
          <Icon className={`h-6 w-6 ${cat.textColor}`} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-xs font-bold uppercase tracking-wider ${cat.textColor}`}>
            {cat.sublabel}
          </p>
          <h3 className="mt-1 font-serif text-lg font-bold text-foreground leading-snug">
            {voice.affiliation}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {voice.year}
            </span>
            {voice.university && (
              <span className="flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                {voice.university}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Highlight */}
      <div className={`mt-5 flex items-start gap-3 rounded-xl ${cat.bgColor} p-4`}>
        <Quote className={`h-5 w-5 shrink-0 ${cat.textColor} opacity-60`} />
        <p className={`text-sm font-bold ${cat.textColor}`}>
          {voice.highlight}
        </p>
      </div>

      {/* Message */}
      <div className="mt-5">
        <div className={`text-sm leading-relaxed text-text-sub ${expanded ? "" : "line-clamp-4"}`}>
          {voice.message.split("\n\n").map((para, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>
              {para}
            </p>
          ))}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-3 inline-flex items-center gap-1 text-sm font-bold ${cat.textColor} transition-colors hover:opacity-80`}
        >
          {expanded ? "閉じる" : "続きを読む"}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  )
}

/* ---- Main Page Component ---- */
export default function VoicePage() {
  const ref = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState<"all" | "junior" | "mid-career" | "abroad">("all")

  const filteredVoices = activeCategory === "all" 
    ? voices 
    : voices.filter((v) => v.category === activeCategory)

  const juniorCount = voices.filter((v) => v.category === "junior").length
  const midCareerCount = voices.filter((v) => v.category === "mid-career").length
  const abroadCount = voices.filter((v) => v.category === "abroad").length

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-gold italic">
              Senior Doctor's Voice
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              先輩医師のVoice
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
              本ページでは随時、先輩医師からのメッセージを掲載しています。<br className="hidden md:block" />
              先輩医師達が、如何に進路を歩み、今、何を思うのか。<br className="hidden md:block" />
              これらのメッセージが、皆様の進路選択の一助となれば幸いです。
            </p>
          </div>
        </div>
      </section>

      {/* Intro Message */}
      <section className="bg-off-white py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="reveal rounded-2xl border border-gold/20 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 shrink-0 text-gold" />
              <div>
                <p className="text-sm leading-relaxed text-text-sub md:text-base">
                  当教室の教室員は、経歴や出身も異なれば、志すところも様々です。
                  当教室では、消化器内科医としてのレベルアップを希望される皆さんに様々な選択肢を用意することが可能です。
                  是非、お気軽に施設見学や教室説明会にお越しください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal flex flex-wrap justify-center gap-3">
            {([
              { key: "all" as const, label: "すべて", count: voices.length },
              { key: "junior" as const, label: "先輩医師", count: juniorCount },
              { key: "mid-career" as const, label: "途中入局", count: midCareerCount },
              { key: "abroad" as const, label: "留学経験", count: abroadCount },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === tab.key
                    ? "bg-navy text-white shadow-lg"
                    : "bg-off-white text-text-sub hover:bg-border"
                }`}
              >
                {tab.label}
                <span className="ml-1.5 opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Cards */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal-stagger grid gap-8 md:grid-cols-2">
            {filteredVoices.map((voice) => (
              <VoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <div className="reveal">
            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
              あなたも仲間になりませんか？
            </h2>
            <p className="mt-4 text-white/80">
              少しでも消化器内科に興味があれば、是非一度見学にお越しください。<br className="hidden md:block" />
              皆様とお会いできることを楽しみにしております。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/recruit/visit"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-gold-light hover:shadow-xl"
              >
                見学・相談を申し込む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/recruit/education"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                教育・研修の特徴
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
