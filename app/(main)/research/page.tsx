"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const groups = [
  {
    id: "liver",
    name: "肝臓グループ",
    nameEn: "Hepatology Group",
    color: "from-blue-600 to-blue-800",
    borderColor: "border-teal",
    diseases: [
      "ウイルス性肝炎 (B型肝炎、C型肝炎他)",
      "自己免疫性肝炎",
      "原発性胆汁性胆管炎",
      "非アルコール性脂肪性肝疾患",
      "肝障害 (アルコール性、薬剤性、代謝性他)",
      "肝腫瘍 (肝細胞癌、肝内胆管癌他)",
      "肝硬変",
      "食道胃静脈瘤",
    ],
  },
  {
    id: "biliary",
    name: "胆膵グループ",
    nameEn: "Biliary-Pancreatic Group",
    color: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-500",
    diseases: [
      "総胆管結石，胆管炎，胆石症，胆嚢炎",
      "原発性硬化性胆管炎",
      "胆管癌，胆嚢癌，十二指腸乳頭部腫瘍",
      "急性膵炎，慢性膵炎，自己免疫性膵炎",
      "膵癌，膵管嚢胞性腫瘍",
    ],
  },
  {
    id: "gi",
    name: "消化管グループ",
    nameEn: "Gastrointestinal Group",
    color: "from-orange-500 to-orange-700",
    borderColor: "border-orange-500",
    diseases: [
      "食道癌，胃癌，大腸癌，大腸ポリープ",
      "下咽頭癌，十二指腸癌，粘膜下腫瘍",
      "逆流性食道炎，胃炎，胃潰瘍，十二指腸潰瘍",
      "ヘリコバクター感染症，消化管出血",
      "炎症性腸疾患（潰瘍性大腸炎，クローン病，腸管ベーチェット病）",
    ],
  },
]

function LiverContent() {
  return (
    <div className="space-y-6">
      {/* C型肝炎治療 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-4">C型肝炎治療</h3>
        <p className="text-sm leading-[1.9] text-text-sub">
          肝疾患連携拠点病院の付属市民総合医療センターを中心として、C型肝炎に対して数多くの抗ウイルス治療を行ってきた。特に最近では、インターフェロンフリーの経口抗ウイルス剤（DAAs）の治療が主体となっている。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          具体的には、ダクラタスビル・アスナプレビル併用療法が130例以上で導入され、治癒率（SVR24）は約90%である。また、ソフォスブビル・レジパスビル併用療法の導入実績が210例以上、ソフォスブビル・リバビリン併用療法が160例以上であり、いずれも現在までのところ、<strong className="text-teal">96%以上の治癒率</strong>を達成している。また、随時発売になる新薬についても導入をしており、新たなDAAsの臨床治験も実施している。
        </p>
      </div>

      {/* 肝癌治療 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-4">肝癌治療</h3>
        <p className="text-sm leading-[1.9] text-text-sub">
          肝細胞癌における治療は、肝障害度（肝機能）、腫瘍数、腫瘍径から日本肝臓学会、肝癌研究会のガイドラインより、下図のように指針されています。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          治療としては、外科的切除、ラジオ波焼灼療法、エタノール注入療法、肝動脈化学塞栓療法、肝動注化学療法、全身化学療法、定位放射線治療と個々の状況に応じて選択の幅が多くあります。
        </p>
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <Image
            src="/images/research/liver-guideline.jpg"
            alt="肝癌診療ガイドライン"
            width={800}
            height={500}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-xs text-muted-foreground text-center">肝癌診療ガイドライン（日本肝臓学会編, 肝癌診療ガイドライン2013年版 一部改変）</p>
        </div>
      </div>

      {/* 1) ラジオ波焼灼療法 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h4 className="font-bold text-base text-navy mb-3">1) ラジオ波焼灼療法；RFA</h4>
        <p className="text-sm leading-[1.9] text-text-sub">
          当センターでは、2000年よりラジオ波焼灼療法(RFA)を導入し、<strong className="text-teal">2017年までに約1400件（2016年70件）</strong>を施行しています。RFAは腫瘍に対してラジオ波電極針を穿刺し、この電極針から発生するラジオ波電流により、腫瘍とその周囲を熱凝固、壊死に陥らせる治療です（下図）。RFAは超音波下で体外からアプローチしますが、当センターでは、超音波検査にも力を入れて診断治療の向上に努めています（造影超音波参照）。
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Image
              src="/images/research/rf-ablation.jpg"
              alt="Cool-tip RF"
              width={300}
              height={150}
              className="w-full h-auto rounded-lg bg-white"
            />
            <p className="mt-2 text-xs text-muted-foreground text-center">Cool-tip RF: 熱凝固範囲のイメージ</p>
          </div>
          <div>
            <p className="text-sm leading-[1.9] text-text-sub mb-4">
              治療前のCT（左下図）では肝臓のS3領域に2cm径の肝癌を認め（赤矢印）、RFA後のCT（右下図）ではその白い"染まり"が消失しました。腫瘍よりやや広く"マージン"をとって（黄矢印）熱凝固されているのがわかります。
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Image
                  src="/images/research/pancreas-ct.jpg"
                  alt="治療前CT"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />
                <p className="mt-1 text-xs text-muted-foreground text-center">治療前CT（赤矢印）</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <Image
                  src="/images/research/bile-ct.jpg"
                  alt="治療後CT"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />
                <p className="mt-1 text-xs text-muted-foreground text-center">治療後CT（黄矢印）</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2) 肝動脈化学塞栓療法 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h4 className="font-bold text-base text-navy mb-3">2) 肝動脈化学塞栓療法および肝動注化学療法</h4>
        <p className="text-sm leading-[1.9] text-text-sub">
          当院では、外科治療やラジオ波焼灼療法が難しい場合には、附属市民総合医療センターを中心に、血管造影検査とCT検査が同時に行えるIVR-CTを用いて、肝動脈化学塞栓療法および肝動注化学療法を行なっています。
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-teal/5 rounded-lg p-4 text-center">
            <p className="text-xs text-text-sub">2015年 塞栓療法</p>
            <p className="text-xl font-bold text-teal mt-1">136例</p>
          </div>
          <div className="bg-teal/5 rounded-lg p-4 text-center">
            <p className="text-xs text-text-sub">2015年 動注療法</p>
            <p className="text-xl font-bold text-teal mt-1">56例</p>
          </div>
          <div className="bg-teal/5 rounded-lg p-4 text-center">
            <p className="text-xs text-text-sub">2016年 塞栓療法</p>
            <p className="text-xl font-bold text-teal mt-1">140例</p>
          </div>
          <div className="bg-teal/5 rounded-lg p-4 text-center">
            <p className="text-xs text-text-sub">2016年 動注療法</p>
            <p className="text-xl font-bold text-teal mt-1">67例</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-[1.9] text-text-sub">
          また、附属市民総合医療センターでは随時、肝細胞癌破裂に対する塞栓止血療法を施行しています。
        </p>
      </div>

      {/* 3) 分子標的治療 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h4 className="font-bold text-base text-navy mb-3">3) 分子標的治療</h4>
        <p className="text-sm leading-[1.9] text-text-sub">
          これまでに、<strong className="text-teal">進行肝細胞癌220例</strong>の患者さんに対して分子標的薬sorafenibを投与してきました。更にGlobalの様々な分子標的薬の治験に参加し、治療困難な進行肝癌の予後改善に向けて取り組んでいます。
        </p>
      </div>

      {/* 造影超音波 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h4 className="font-bold text-base text-navy mb-3">造影超音波</h4>
        <p className="text-sm leading-[1.9] text-text-sub">
          2007年1月より世界に先駆けて日本で市販された超音波造影剤ソノゾイドは血液よりも小さい気泡であり、体のなかで分解されてしまい、最終的には肺から排出される。CTやMRIで使用されるヨード造影剤と異なり、腎臓が悪いかたでも使用可能である。またヨードアレルギーのある方でも使用が可能である。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          いままで5千人以上の方に使用してきたが、明らかな副作用がでた方はおらず、妊婦さんにも安全に使用可能な造影剤である。一回にわずか0.2ccを静脈注射するだけで、注射後15-45秒の動脈優位相で腫瘍血管と腫瘍濃染を、1分半の門脈優位相で腫瘍濃染の程度を、そして10分後の後血管相で腫瘍と周囲との輝度の差を観察し、腫瘍の存在診断（腫瘍があるかないかの判定）と質的診断（その腫瘍がどんな腫瘍であるかを診断する）が可能である。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          その造影剤を用いて三次元で腫瘍を描出することで診断や治療の効果判定にもちいたり、またCTやMRIを参照にする融合画像を用いることで、超音波だけでは検出できない病変を検出し、超音波ガイドで治療したり、それを効果判定することも可能になった。点滴の必要があるが、誰でも安心、安全により精密な検査をうけることができ、その結果、診断と治療方針を決定することができる検査である。<strong className="text-teal">2016年は約600件施行</strong>しております。
        </p>
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <Image
            src="/images/research/ultrasound.png"
            alt="造影超音波画像"
            width={300}
            height={500}
            className="mx-auto h-auto max-h-96 w-auto rounded-lg"
          />
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            <strong>Fig. 1</strong> 約3cm 限局性結節性過形成 (focal nodular hyperplasia: FNH) 症例<br />
            FNHは多血性であるため、肝細胞癌との鑑別が重要な肝腫瘍結節である。a ソナゾイドを0.2cc静注し、高音圧造影モードを用いて、自動scanを用いて撮影した三次元造影超音波動脈相での前後(右下)、左右（右上）、上下（左下）方向からの観察とmaximum intensity with the surface modeでのsonographic angiogramでは結節の中心にspoke wheel patternを認め（矢印）、b 三次元造影超音波後血管相での観察ではcentral scarを認め（矢印）、FNHの所見に一致する。
          </p>
        </div>
      </div>
    </div>
  )
}

function BiliaryContent() {
  return (
    <div className="space-y-6">
      {/* 網羅的診療 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-emerald-500 pl-3 mb-4">良性疾患から悪性疾患まで胆膵疾患の網羅的診療を実現</h3>
        <p className="text-sm leading-[1.9] text-text-sub">
          胆膵領域は解剖学的に複雑な部位に位置し、検査・治療には高度な技術と専門性が求められる領域です。また胆管と膵管におけるトラブルの背景には、常に腫瘍の可能性を想定しながら検査を行わなければならないことから、疾患の良性・悪性を問わず、あらゆる胆膵疾患を対象として幅広い診療を行っています。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          特に横浜市立大学附属市民総合医療センター病院や神奈川県立がんセンターでは、早くから超音波内視鏡（EUS）を用いた最新の内視鏡的診断・治療を展開するとともに、悪性腫瘍に対しては医師主導の臨床試験を含む最新の化学療法や治験を推進してきました。上記2病院を教育施設として、これまでに多くの胆膵専門医を協力病院へと輩出しており、治療困難症例のコンサルトや人材交流を図る等、一丸となって診療に取り組んでいます。
        </p>
      </div>

      {/* 悪性腫瘍治療 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-emerald-500 pl-3 mb-4">胆膵悪性腫瘍に対する、より良い治療を目指して</h3>
        <p className="text-sm leading-[1.9] text-text-sub">
          胆道癌や膵癌は近年の罹患者数の増加をみる一方で、未だ早期発見や診断の難しい癌種です。当教室では、以前から造影超音波内視鏡（EUS）を用いた胆膵悪性腫瘍の画像診断法の確立に取り組むとともに、病変の組織診断を得るために超音波内視鏡の観察下で穿刺を行うEUS-FNAを導入してきました。進行癌症例に対しては、常に最新の化学療法の提供と、一人一人の価値観やニーズを尊重したベストな化学療法の実現を目指しています。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          近年、胆膵領域においても専門分野の細分化が進み、内視鏡治療医と化学療法を行う腫瘍内科医が別々に診療を行う施設や教育機関が増えてきていました。しかしながら、胆道癌や膵癌は、化学療法中に閉塞性黄疸や胆管炎、消化管閉塞等の様々な病態が合併・併存することが多く、病態に応じてステント留置等の内視鏡的治療介入が必要となる領域です。当教室では胆膵内視鏡治療と化学療法の双方の専門性を併せ持った胆膵専門医の育成を図ることで、<strong className="text-teal">組織診断・化学療法・内視鏡的治療介入が三位一体となったシームレスな医療提供</strong>を目指しています。
        </p>
        <p className="mt-3 text-sm leading-[1.9] text-text-sub">
          また、胆膵癌に対する化学療法は今後の更なる発展が求められる分野です。横浜市立大学附属市民総合医療センター病院や神奈川県立がんセンターでは、JCOG（日本臨床腫瘍研究グループ）の参加施設として医師主導の臨床試験を推進するとともに、基礎研究面では更なる病態の解明と新規治療標的分子の同定を目指し、次世代型シークエンサーによる網羅的ゲノム解析を行なう等、より良い化学療法の実現を目指して臨床と基礎の双方からアプローチを続けています。
        </p>
      </div>

      {/* 最先端技術 */}
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-emerald-500 pl-3 mb-4">最先端の胆膵内視鏡技術を駆使して</h3>
        <p className="text-sm leading-[1.9] text-text-sub">
          近年、胆膵領域の内視鏡技術は、超音波内視鏡（EUS）を用いたアプローチにより飛躍的な進歩を遂げています。当教室では以前から超音波内視鏡（EUS）を用いた最新の内視鏡的診断・治療を展開してきた基盤を活かし、組織診断を得るために超音波内視鏡観察下で病変の穿刺を行うEUS-FNAのみならず、胆道狭窄等によって生じた胆汁うっ滞を解除するために超音波内視鏡観察下で胆道を穿刺してステント留置を行うEUS-HGS, EUS-CDS, EUS-GBDや、癌性疼痛を緩和するために腹腔神経節を穿刺して神経ブロックを行うEUS-CPN等、最新の内視鏡インターベンションを導入し、従来の困難症例に対しても積極的に内視鏡的治療介入を行っています。
        </p>
      </div>

      {/* 4つの治療法カード */}
      <div className="reveal grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
          <h4 className="font-bold text-sm text-emerald-800">超音波内視鏡下 膵胆道ドレナージ術</h4>
          <p className="mt-2 text-xs text-emerald-700 leading-relaxed">
            近年超音波内視鏡を用いた膵胆道ドレナージ治療が急速に発達してきました。この様な治療法により、進行癌の患者様にも体表からチューブを留置することなく生活していただけます。
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
          <h4 className="font-bold text-sm text-emerald-800">術後消化管に対するバルーン内視鏡を用いたERCP</h4>
          <p className="mt-2 text-xs text-emerald-700 leading-relaxed">
            胃全摘後、膵切除後などの患者様に対する結石除去術・狭窄拡張術はこれまで内科的治療が困難でしたが、当センターでは胆膵処置用バルーン内視鏡（小腸鏡）を導入し、積極的に低侵襲な治療を行っています。現在、ERCPのうち約15%（年間約80件）がこのような患者様を対象としています。
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
          <h4 className="font-bold text-sm text-emerald-800">内視鏡的乳頭部腫瘍切除術</h4>
          <p className="mt-2 text-xs text-emerald-700 leading-relaxed">
            十二指腸乳頭部に限局する腫瘍（腺腫もしくは粘膜にとどまるがん）を適応としています。スネアを用いて内視鏡的に一括切除を行います。
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
          <h4 className="font-bold text-sm text-emerald-800">超音波内視鏡下膵嚢胞ドレナージ術・内視鏡的ネクロゼクトミー</h4>
          <p className="mt-2 text-xs text-emerald-700 leading-relaxed">
            重症急性膵炎に合併した感染性被包化壊死に対し、超音波内視鏡を用いてステントを留置します。症例によっては、さらに、留置したステントを介して内視鏡を被包化壊死に挿入し壊死物質を除去する治療（内視鏡的ネクロゼクトミー）を行います。
          </p>
        </div>
      </div>
    </div>
  )
}

function GIContent() {
  return (
    <div className="space-y-6">
      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-orange-500 pl-3">早期消化管癌に対する内視鏡治療技術の向上と普及</h3>
        <p className="mt-4 text-sm leading-relaxed text-text-sub">
          近年の内視鏡技術の進歩により、早期胃癌をはじめとした早期消化管癌に対するEMR（内視鏡的粘膜除去術）、ESD（内視鏡的粘膜下層剥離術）が普及しておりますが、横浜市立大学附属市民総合医療センターは県内で先駆けてESDを導入し、現在では年間で<strong className="text-teal">食道ESD 92件、胃ESD 264件、大腸ESD 260件、十二指腸ESD 32件</strong>（2023年集計）と全国の数ある施設の中でもトップクラスの実績となっております。
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "食道ESD", count: "92件" },
            { label: "胃ESD", count: "264件" },
            { label: "大腸ESD", count: "260件" },
            { label: "十二指腸ESD", count: "32件" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-orange-50 border border-orange-200 p-4 text-center">
              <p className="text-xs text-orange-700">{item.label}</p>
              <p className="mt-1 text-xl font-bold text-orange-600">{item.count}</p>
              <p className="text-[10px] text-orange-500">2023年集計</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-text-sub">
          中でも、抗血栓薬服用者などのハイリスク症例や、技術的に難しいとされる治療後遺残再発病変、また、潰瘍性大腸炎に併発した大腸腫瘍に対しても当院IBDセンターと討議し適応可能な症例に対してESDを行い、さらなる診断や技術の確立を目指しています。また、消化器外科と合同でGIST（消化管間葉系腫瘍）に対するLECS（腹腔鏡・内視鏡合同手術）・EFTR（内視鏡的全層切除）や耳鼻咽喉科と合同で表在性咽頭癌に対するESDなど、他科とも連携をし、内視鏡治療を行っております。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-sub">
          何よりも安全を第一に、患者さまにとって病気の根治性を損ねることなく低侵襲なより良い治療を提供できるよう心がけております。同センターを内視鏡治療の教育施設として、これまで多くの内視鏡治療医を協力病院へと輩出しております。協力病院がそれぞれの地域での内視鏡治療の基幹病院となるよう、グループ一丸となって内視鏡治療を推進しております。
        </p>
        <div className="mt-6">
          <Image
            src="/images/research/esd-chart.png"
            alt="ESD実績グラフ（2016-2023）"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg bg-white border border-border"
          />
          <p className="mt-2 text-xs text-muted-foreground text-center">ESD実績推移（2016-2023年）</p>
        </div>
      </div>

      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-orange-500 pl-3">より良い内視鏡検査の実現を求めて</h3>
        <p className="mt-4 text-sm leading-relaxed text-text-sub">
          早期消化管癌に対するESDが普及してきている現在、いかに癌を早期に発見することが課題となっております。最近では、NBI(narrow band imaging)、BLI(blue laser imaging)などの狭帯域光観察による診断技術も普及し、消化管癌の検出率の向上が言われております。しかし、その観察には正常と異常を見分ける診断力が必要です。そのため、カンファレンスを行い、拡大観察における診断力の向上や、早期癌の発見のための観察トレーニングを日々徹底しております。さらに、内視鏡所見だけでなく、病理所見や遺伝子変異情報を網羅的に検討する取り組みを行っております。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-sub">
          癌の早期発見と消化管全域のトータルケアを目標に、内視鏡検査のさらなる向上を目指しています。
        </p>
      </div>

      <div className="reveal rounded-2xl bg-white border border-border p-6 md:p-8">
        <h3 className="font-bold text-lg text-navy border-l-4 border-orange-500 pl-3">ヘリコバクター・ピロリ菌除菌外来</h3>
        <p className="mt-4 text-sm leading-relaxed text-text-sub">
          胃癌の発生にヘリコバクター・ピロリ菌感染が強く関与し、その除菌によって胃癌発症の抑制を見込めることから、2013年に除菌治療の適応が拡大されました。しかしながら、未だ中高年以上を中心に未除菌者は数多く存在するのが現状です。当教室では、ピロリ菌の撲滅と、より良い除菌法の確立を目指して大規模な除菌studyを推進しています。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-sub">
          特に、抗生剤耐性のあるピロリ菌感染であった為に一次除菌が不成功となった方、抗生剤に対するアレルギーのために抗生剤の内服が困難な方に対する除菌治療にも専門的に取り組んでいます。なお上述のように、除菌後も胃発癌の可能性に十分に注意し、定期的な内視鏡検査の継続によるアフターケアを徹底しています。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-sub">
          また基礎研究面においても、かつてからピロリ菌感染による発癌機序の解明に取り組んで来ました。<strong className="text-teal">当教室は、臨床研究と基礎研究の双方からヘリコバクター・ピロリ菌と戦い続けます。</strong>
        </p>
      </div>
    </div>
  )
}

export default function ResearchPage() {
  const [activeGroup, setActiveGroup] = useState("liver")
  const ref = useScrollReveal([activeGroup])
  const currentGroup = groups.find(g => g.id === activeGroup)!

  return (
    <div ref={ref}>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Clinical Features & Research
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            診療の特色と実績
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal text-center">
            <p className="text-base leading-[2] text-text-sub md:text-lg">
              消化器内科のカバーする領域・疾患は多岐にわたり，当教室では<strong className="text-navy">肝臓グループ</strong>・<strong className="text-navy">胆膵グループ</strong>・<strong className="text-navy">消化管グループ</strong>が各々，高い専門性を持ちつつ，緊密に連携して診療と研究に従事しています．良性疾患から悪性腫瘍に至るまで，健康回復と生活の質（QOL）の向上に重点を置きつつも，ニーズや価値観に配慮した診療を実践し，常に全人的な医療の提供を心掛けています．
            </p>
          </div>

          <div className="reveal mt-12 flex flex-wrap justify-center gap-3">
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={cn(
                  "rounded-full px-6 py-3 text-sm font-bold transition-all",
                  activeGroup === g.id
                    ? "bg-gradient-to-r from-navy to-navy-light text-white shadow-lg"
                    : "bg-off-white text-text-sub hover:bg-navy/10"
                )}
              >
                {g.name}
              </button>
            ))}
          </div>

          <div key={`diseases-${activeGroup}`} className="reveal mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="font-[family-name:var(--font-playfair-display)] text-xs tracking-wider text-teal">{currentGroup.nameEn}</p>
            <h3 className="mt-1 font-serif text-xl font-bold text-navy">{currentGroup.name} - 対象疾患</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {currentGroup.diseases.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-sub">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal text-center mb-10">
            <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-teal">{currentGroup.nameEn}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">{currentGroup.name}</h2>
          </div>

          {activeGroup === "liver" && (
            <div key="liver-content">
              <LiverContent />
            </div>
          )}
          {activeGroup === "biliary" && (
            <div key="biliary-content">
              <BiliaryContent />
            </div>
          )}
          {activeGroup === "gi" && (
            <div key="gi-content">
              <GIContent />
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="reveal">
            <Link
              href="/research/publications"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-navy-light px-8 py-4 font-bold text-white shadow-lg transition-all hover:gap-3 hover:shadow-xl"
            >
              論文・業績一覧を見る
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
