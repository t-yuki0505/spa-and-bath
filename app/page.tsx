/* eslint-disable @next/next/no-img-element -- WebPをpicture要素で明示配信し、元画像も保持するため */
import { siteUrl } from "./site-config";

const contactUrl = "#contact";
const hubspotFormUrl = "https://42re3u.share-na2.hsforms.com/2_c7gVmFfRs-qhyxN4tR2KQ";

const scenes = [
  {
    key: "bath",
    no: "01",
    place: "浴槽・浴室",
    title: "清掃・洗浄を支える",
    text: "微細な気泡が汚れの隙間へ入り込み、浴槽まわりや床、壁面の清掃を支えます。",
    image: "bath-cleaning",
    alt: "温浴施設の浴室を清掃するスタッフ",
  },
  {
    key: "shower",
    no: "02",
    place: "シャワー",
    title: "シャワーに付加価値を",
    text: "各シャワーヘッドの交換ではなく、給水系統から施設共通のUFB水を届けます。",
    image: "shower",
    alt: "温浴施設のシャワーから流れる水に触れる手",
  },
  {
    key: "pipe",
    no: "03",
    place: "配管・シャワーホース",
    title: "配管の内側へアプローチ",
    text: "日常的にUFB水を流しながら、配管やシャワーホース内の環境維持を支えます。",
    image: "biofilm-pipe",
    alt: "配管内側に形成されたバイオフィルムのイメージ",
  },
  {
    key: "washroom",
    no: "04",
    place: "洗面・トイレ",
    title: "水まわりの清潔感を維持",
    text: "来館者の目に触れやすい洗面や手洗いまわりの日常清掃に活用できます。",
    image: "washroom",
    alt: "温浴施設の洗面台を清掃するスタッフ",
  },
  {
    key: "kitchen",
    no: "05",
    place: "食堂・厨房",
    title: "食器・調理器具の洗浄へ",
    text: "食器や調理器具、シンクまわりなど、バックヤードの水仕事にも広がります。",
    image: "kitchen",
    alt: "温浴施設の厨房で食器を洗うスタッフ",
  },
  {
    key: "laundry",
    no: "06",
    place: "ランドリー",
    title: "タオル・館内着の洗濯へ",
    text: "毎日大量に発生するタオル類の洗濯にも、館内共通のUFB水を利用できます。",
    image: "laundry",
    alt: "温浴施設のランドリーでタオルを扱うスタッフ",
  },
] as const;

const faqItems = [
  {
    question: "新規開業・新築の計画段階から相談できますか？",
    answer:
      "はい。ホテル・旅館、温浴施設、ジム、プール、レジャー施設など、施設用途と給水計画を確認し、配管設計の段階から全館UFBや人工炭酸泉設備の構成をご提案します。",
  },
  {
    question: "既存施設の改装・リニューアルでも導入できますか？",
    answer:
      "導入できます。既存配管、機械室のスペース、施設を停止できる時間などを確認し、運営への影響を抑えた設置方法を個別に検討します。",
  },
  {
    question: "温浴施設以外でも同じように活用できますか？",
    answer:
      "ホテル・旅館、ジム、プール、レジャー施設など、水を多く使う施設で検討できます。利用者が触れる水に加え、清掃・洗浄・配管管理まで、施設用途に合わせて活用範囲を整理します。",
  },
  {
    question: "炭酸ガス使用量40％以上削減とは、どのような数値ですか？",
    answer:
      "UFB DUAL®人工炭酸泉装置と従来方式との比較値です。実際の削減率は、浴槽容量、水温、循環量、目標濃度、運転条件などにより異なるため、現在の設備と使用量を確認してご提案します。",
  },
  {
    question: "給水本管へ設置すると、どこへUFB水が届きますか？",
    answer:
      "給水系統に応じて、浴槽・浴室、シャワー、洗面・トイレ、厨房、ランドリーなどへUFB水を供給できます。施設の配管構成により供給範囲は異なります。",
  },
  {
    question: "認証と保証の対象範囲を教えてください。",
    answer:
      "50Aまでの対象モデルには、JWWAの認証登録およびJETの給水器具等認証を取得したモデルがあり、10年保証を案内しています。50Aを超える大口径は、施設条件を確認のうえ個別にご案内します。",
  },
] as const;

const organizationId = "https://ufbtech-co.jp/#organization";
const serviceId = `${siteUrl}/#service`;
const faqId = `${siteUrl}/#faq`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "UFB TECH株式会社",
      url: "https://ufbtech-co.jp/",
      logo: {
        "@type": "ImageObject",
        url: "https://ufbtech-co.jp/service-site/wp-content/uploads/2024/12/ufbtech_logo3.png",
      },
      address: {
        "@type": "PostalAddress",
        postalCode: "104-0028",
        addressRegion: "東京都",
        addressLocality: "中央区",
        streetAddress: "八重洲2-1-1 YANMAR TOKYO 12階",
        addressCountry: "JP",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${siteUrl}/#contact`,
        availableLanguage: "ja",
      },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "ホテル・温浴施設向け UFB DUAL® 導入提案",
      serviceType: [
        "全館UFB設備の導入支援",
        "人工炭酸泉設備の導入支援",
        "施設の新規開業・改装時の水設備計画",
        "炭酸ガス使用量の見直し",
      ],
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "日本" },
      audience: [
        { "@type": "BusinessAudience", audienceType: "温浴施設運営事業者" },
        { "@type": "BusinessAudience", audienceType: "ホテル・旅館運営事業者" },
        { "@type": "BusinessAudience", audienceType: "ジム・プール運営事業者" },
        { "@type": "BusinessAudience", audienceType: "レジャー施設運営事業者" },
        { "@type": "BusinessAudience", audienceType: "施設の新規開業・改装担当者" },
      ],
      description:
        "ホテル・旅館、温浴施設、ジム、プール、レジャー施設の配管状況や用途を確認し、新規開業・改装に合わせた全館UFBと人工炭酸泉設備の構成、炭酸ガス使用量の見直しを提案します。",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UFB DUAL® 設備提案",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "給水本管から施設全体へUFB水を届ける全館UFB設備",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "炭酸ガス使用量40％以上削減を目指す人工炭酸泉設備",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "UFB TECH株式会社 ホテル・温浴施設向け UFB DUAL®",
      inLanguage: "ja-JP",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "ホテル・温浴施設向けUFB設備｜炭酸ガス削減・開業・改装｜UFB DUAL®",
      description:
        "ホテル・旅館、温浴施設、ジム、プール、レジャー施設の新規開業・改装へ。全館UFBによる水環境づくりと、人工炭酸泉装置による炭酸ガス使用量の削減を提案します。",
      keywords:
        "施設の課題解決, 炭酸ガス削減, 施設の新規開業, 施設改装, ホテル水設備, 旅館水設備, ジム設備, プール設備, 全館UFB, 人工炭酸泉",
      inLanguage: "ja-JP",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: [{ "@id": organizationId }, { "@id": serviceId }],
      mainEntity: [{ "@id": serviceId }, { "@id": faqId }],
      publisher: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.jpg`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": faqId,
      url: `${siteUrl}/#faq`,
      inLanguage: "ja-JP",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function ResponsiveImage({
  name,
  alt,
  className,
  width = 1672,
  height = 941,
  eager = false,
  sizes = "100vw",
}: {
  name: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <picture>
      <source
        srcSet={[
          `/assets/web/${name}-960.webp 960w`,
          `/assets/web/${name}-1440.webp 1440w`,
          `/assets/web/${name}.webp ${width}w`,
        ].join(", ")}
        sizes={sizes}
        type="image/webp"
      />
      <img
        className={className}
        src={`/assets/web/${name}-1440.webp`}
        srcSet={[
          `/assets/web/${name}-960.webp 960w`,
          `/assets/web/${name}-1440.webp 1440w`,
          `/assets/web/${name}.webp ${width}w`,
        ].join(", ")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding={eager ? "sync" : "async"}
      />
    </picture>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="page">
        <section className="hero" aria-labelledby="hero-title">
          <ResponsiveImage
            name="onsen-hero"
            alt="上質な内装の温浴施設と浴場"
            className="cover-image hero-image"
            eager
          />
          <div className="hero-overlay" aria-hidden="true" />

          <header className="site-header container">
            <a className="brand" href="#top" aria-label="UFB TECH株式会社 温浴施設向けページの先頭へ">
              <img
                className="brand-logo"
                src="/assets/original/ufbtech-logo-white-color-mark.png"
                width="893"
                height="152"
                alt="UFB TECH株式会社"
              />
            </a>
            <nav className="desktop-nav" aria-label="ページ内ナビゲーション">
              <a href="#issues">温浴施設の課題</a>
              <a href="#solutions">UFB DUAL®による解決</a>
              <a href="#whole-facility">全館UFB</a>
              <a href="#scenes">活用シーン</a>
              <a href="#trust">導入設備例</a>
              <a className="header-cta" href={contactUrl}>お問い合わせ</a>
            </nav>
            <details className="mobile-menu">
              <summary aria-label="メニューを開く"><span /><span /><span /></summary>
              <nav aria-label="スマートフォン用ナビゲーション">
                <a href="#issues">温浴施設の課題</a>
                <a href="#solutions">UFB DUAL®による解決</a>
                <a href="#whole-facility">全館UFB</a>
                <a href="#scenes">活用シーン</a>
                <a href="#trust">導入設備例</a>
                <a href={contactUrl}>お問い合わせ</a>
              </nav>
            </details>
          </header>

          <div className="container hero-content" id="top">
            <div className="hero-copy">
              <p className="kicker">温浴施設向け ウルトラファインバブルのご提案</p>
              <h1 id="hero-title">衛生管理と、<br />炭酸泉コストに<br />答えを。</h1>
              <p className="hero-lead">
                レジオネラ属菌対策に関わるバイオフィルムと、値上がりが続く炭酸ガス。
                UFB DUAL®が、温浴施設の2つの重要課題を解決へ導きます。
              </p>
              <a className="button" href={contactUrl}>導入について相談する</a>
            </div>
          </div>

          <img
            className="hero-product hero-product-100a"
            src="/assets/web/ufb-dual-100a-1440.webp"
            srcSet="/assets/web/ufb-dual-100a-960.webp 960w, /assets/web/ufb-dual-100a-1440.webp 1440w, /assets/web/ufb-dual-100a.webp 2000w"
            sizes="(max-width: 700px) 0px, 48vw"
            alt="給水本管へ設置するUFB DUAL® 100A"
            width="2000"
            height="1123"
            loading="eager"
            decoding="async"
          />
          <div className="hero-message" aria-label="2つの主要提案">
            <div><small>HYGIENE</small><strong>バイオフィルム対策</strong></div>
            <div className="cost-highlight"><small>RUNNING COST</small><strong>炭酸ガス40％以上削減</strong></div>
          </div>
        </section>

        <section className="issues" id="issues">
          <div className="container">
            <header className="section-head">
              <p className="kicker">温浴施設が抱える2つの課題</p>
              <h2 className="title issues-title">
                <span className="issues-title-wide">
                  <span>目に見えない衛生リスクと、</span>
                  <span>増え続ける運営コスト。</span>
                </span>
                <span className="issues-title-narrow">
                  <span>目に見えない</span>
                  <span>衛生リスクと、</span>
                  <span>増え続ける</span>
                  <span>運営コスト。</span>
                </span>
              </h2>
              <p className="lead">どちらも温浴施設にとって避けて通れない、日常運営に直結する課題です。</p>
            </header>
            <div className="issue-grid">
              <article className="issue-card">
                <ResponsiveImage name="biofilm-pipe" alt="配管内側に形成されたバイオフィルムのイメージ" className="cover-image" sizes="(max-width: 700px) 100vw, 50vw" />
                <div className="card-overlay" aria-hidden="true" />
                <span className="issue-no">01</span>
                <div className="issue-body">
                  <small>レジオネラ属菌対策</small>
                  <h3>配管内に形成される<br />バイオフィルム。</h3>
                  <p>配管や浴槽設備に形成されるバイオフィルムは、レジオネラ属菌が定着・増殖しやすい環境に関わります。</p>
                  <strong className="issue-alt">薬剤洗浄だけでなく、日常の通水環境から対策したい</strong>
                </div>
              </article>
              <article className="issue-card">
                <ResponsiveImage name="carbon-cost" alt="人工炭酸泉設備と炭酸ガスボンベを点検するスタッフ" className="cover-image" sizes="(max-width: 700px) 100vw, 50vw" />
                <div className="card-overlay" aria-hidden="true" />
                <span className="issue-no">02</span>
                <div className="issue-body">
                  <small>炭酸泉の導入・運営</small>
                  <h3>炭酸ガスの<span className="mobile-only"><br /></span>値上がりが、<br />目玉風呂の負担に。</h3>
                  <p>人工炭酸泉を運営するほど積み重なる炭酸ガス費用。新しく導入したくても、費用や設備ノウハウが壁になります。</p>
                  <strong className="issue-alt">魅力は維持しながら、ガス使用量と運営費を抑えたい</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="container">
            <header className="section-head">
              <p className="kicker">UFB DUAL®による2つの解決策</p>
              <h2 className="title">その2つの課題を、<br />UFB DUAL®が<span className="mobile-only"><br /></span>解決します。</h2>
              <p className="lead">施設全体の水環境と、目玉浴槽の運営コスト。役割の異なる2つの設備を、一つの提案としてご用意します。</p>
            </header>
            <p className="solution-bridge">
              衛生管理と、<span className="mobile-only"><br /></span>
              炭酸泉コスト削減を<span className="mobile-only"><br /></span>同時に。
            </p>
            <div className="solution-grid">
              <article className="solution-card">
                <div className="solution-visual">
                  <ResponsiveImage name="whole-facility" alt="浴場、シャワー、厨房、洗面など施設全体にUFB水が届くイメージ" className="cover-image" sizes="(max-width: 700px) 100vw, 50vw" />
                  <div className="visual-shade" aria-hidden="true" />
                  <div className="visual-label">
                    <small>全館UFB</small>
                    <strong>建物の大元に1台。<br />施設全体へ。</strong>
                  </div>
                  <img
                    className="solution-product solution-product-100a"
                    src="/assets/web/ufb-dual-100a-960.webp"
                    srcSet="/assets/web/ufb-dual-100a-960.webp 960w, /assets/web/ufb-dual-100a-1440.webp 1440w, /assets/web/ufb-dual-100a.webp 2000w"
                    sizes="(max-width: 700px) 64vw, 29vw"
                    alt="UFB DUAL® 100A"
                    width="2000"
                    height="1123"
                    loading="lazy"
                  />
                </div>
                <div className="solution-body">
                  <span className="solution-type">配管直結型UFB生成ノズル</span>
                  <h3>給水本管から、<br />建物全体を<span className="mobile-only"><br /></span>UFB水へ。</h3>
                  <p>建物の給水本管にUFB DUAL®を設置。浴槽、浴室、シャワーホース、洗面、厨房、ランドリーなど、水が流れる場所へUFB水を届けます。</p>
                  <div className="metric metric-recommendation">
                    <small>公益社団法人 全国水利用設備環境衛生協会</small>
                    <strong><em>水利協</em><span className="metric-unit">推奨品</span></strong>
                    <span className="metric-caption">バイオフィルム除去に関する効果が認められた推奨品です。</span>
                  </div>
                  <ul className="solution-points">
                    <li>JWWA認証登録・JET給水器具等認証（対象モデル：50Aまで）</li>
                    <li>10年保証（対象モデル：50Aまで）</li>
                    <li>レジオネラ属菌が生息しにくい環境づくりを支えます</li>
                    <li>外部電源・ポンプ・薬剤・カートリッジ不要</li>
                  </ul>
                </div>
              </article>

              <article className="solution-card">
                <div className="solution-visual">
                  <ResponsiveImage name="carbonated-bath" alt="温浴施設の人工炭酸泉浴槽" className="cover-image" width={2000} height={1125} sizes="(max-width: 700px) 100vw, 50vw" />
                  <div className="visual-shade" aria-hidden="true" />
                  <div className="visual-label">
                    <small>人工炭酸泉</small>
                    <strong>炭酸ガスを、<br />ムダなく水へ。</strong>
                  </div>
                  <picture>
                    <source srcSet="/assets/web/carbonated-equipment.webp" type="image/webp" />
                    <img
                      className="solution-equipment"
                      src="/assets/web/carbonated-equipment-960.webp"
                      srcSet="/assets/web/carbonated-equipment-960.webp 960w, /assets/web/carbonated-equipment-1440.webp 1440w, /assets/web/carbonated-equipment.webp 2000w"
                      sizes="(max-width: 700px) 145px, 215px"
                      alt="実際のUFB DUAL®炭酸泉設備"
                      width="2000"
                      height="1125"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="solution-body">
                  <span className="solution-type">UFB DUAL® 炭酸泉装置</span>
                  <h3>効率よく溶解し、<br />少ないガスで<span className="mobile-only"><br /></span>炭酸泉を。</h3>
                  <p>UFB技術で炭酸ガスを微細化し、効率よく水へ溶解。既存設備・新規導入のどちらでも、炭酸泉の魅力を維持しながら継続的なガス費用の見直しにつなげます。</p>
                  <div className="metric metric-savings">
                    <small>従来方式比・炭酸ガス使用量</small>
                    <strong><em>40％以上</em><span className="metric-unit">削減</span></strong>
                    <span className="metric-caption">毎月の炭酸ガス費用を見直す、導入判断の根拠に。</span>
                  </div>
                  <ul className="solution-points">
                    <li>値上がりする炭酸ガス費用の負担を軽減</li>
                    <li>浴槽・循環設備に合わせて設備構成を設計</li>
                    <li>導入ノウハウがなくても計画から相談可能</li>
                  </ul>
                </div>
              </article>
            </div>
            <p className="solution-note">※炭酸ガス削減率は従来方式との比較値です。実際の削減率は、浴槽容量・水温・循環量・目標濃度・運転条件等により異なります。</p>
          </div>
        </section>

        <section className="whole-facility" id="whole-facility">
          <ResponsiveImage name="whole-facility" alt="給水本管から浴場、シャワー、厨房、洗面へUFB水が供給されるイメージ" className="cover-image whole-image" />
          <div className="whole-overlay" aria-hidden="true" />
          <div className="container">
            <div className="whole-copy">
              <p className="kicker">さらに、建物全体にUFB水が流れるということ</p>
              <h2>ひとつの設備から、<br />水を使う<span className="mobile-only"><br /></span>すべての場面へ。</h2>
              <p>UFB DUAL®は、特定の浴槽だけに使う設備ではありません。給水本管から施設全体へUFB水を供給するため、浴場からバックヤードまで、さまざまな場面にメリットが広がります。</p>
              <div className="water-route" aria-label="UFB水が届く場所">
                <span>浴槽・浴室</span><span>シャワー</span><span>配管</span>
                <span>洗面・トイレ</span><span>厨房</span><span>ランドリー</span>
              </div>
            </div>
          </div>
        </section>

        <section className="scenes" id="scenes">
          <div className="container">
            <header className="section-head">
              <p className="kicker">温浴施設から、さまざまな施設へ</p>
              <h2 className="title">施設の水を変えると、<br />日々の運営が変わる。</h2>
              <p className="lead">ホテル・旅館、ジム、レジャー施設、プールなど、水を使うさまざまな施設へ。利用者が触れる水から、清掃・洗浄・配管管理まで、UFB水のメリットが日々の運営全体へ広がります。</p>
            </header>
            <div className="scene-grid">
              {scenes.map((scene) => (
                <article className={`scene-card ${scene.key}`} key={scene.key}>
                  <div className="scene-photo">
                    <ResponsiveImage name={scene.image} alt={scene.alt} className="cover-image" sizes="(max-width: 700px) 100vw, 33vw" />
                  </div>
                  <div className="scene-body">
                    <small>{scene.no}　{scene.place}</small>
                    <h3>{scene.title}</h3>
                    <p>{scene.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="container">
            <header className="section-head">
              <p className="kicker">導入設備例</p>
              <h2 className="title">UFB DUAL®の設備を、<br />写真でご紹介。</h2>
              <p className="lead">人工炭酸泉設備と、給水本管へ設置する100Aモデルをご紹介します。</p>
            </header>
            <div className="equipment-gallery">
              <figure className="equipment-feature">
                <div className="equipment-feature-photo">
                  <ResponsiveImage
                    name="carbonated-equipment"
                    alt="温浴施設へ設置された実際のUFB DUAL®人工炭酸泉設備"
                    className="cover-image"
                    width={2000}
                    height={1125}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <small>実際の設置例</small>
                  <strong>UFB DUAL®<br />人工炭酸泉設備</strong>
                  <p>浴槽・循環設備に合わせて、機器構成と設置方法をご提案します。</p>
                </figcaption>
              </figure>
              <figure className="equipment-feature equipment-feature-100a">
                <div className="equipment-feature-photo">
                  <ResponsiveImage
                    name="ufb-dual-100a-blue"
                    alt="給水本管へ設置するUFB DUAL® 100Aモデル"
                    className="cover-image"
                    width={3472}
                    height={2604}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <figcaption>
                  <small>100A 導入例</small>
                  <strong>給水本管へ設置する<br />100Aモデル</strong>
                  <p>施設の給水設備へ設置された、UFB DUAL® 100Aの導入例です。</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <header className="section-head">
              <p className="kicker">導入をご検討の方へ</p>
              <h2 className="title" id="faq-title">新規開業・改装時の<br />よくあるご質問。</h2>
              <p className="lead">施設計画の段階から、既存設備の更新、炭酸ガス費用の見直しまでご相談いただけます。</p>
            </header>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.question}>
                  <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
                  <div className="faq-answer"><span>A</span><p>{item.answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <ResponsiveImage name="open-air-bath" alt="温浴施設の露天風呂" className="cover-image" />
          <div className="cta-overlay" aria-hidden="true" />
          <div className="container cta-content">
            <p className="kicker">お問い合わせ</p>
            <h2>
              新規開業も、<span className="narrow-only"><br /></span>施設の改装も。<br />
              水設備の計画から<span className="mobile-only"><br /></span>ご提案します。
            </h2>
            <p>ホテル・旅館、温浴施設、ジム、プール、レジャー施設など、<br />施設用途・配管状況・炭酸ガス使用量に合わせて設備構成をご提案します。</p>
            <div className="cta-tags">
              <span>新規開業・新築</span><span>改装・リニューアル</span><span>ホテル・旅館</span><span>ジム・プール</span><span>炭酸ガス費用の見直し</span>
            </div>
            <div className="hubspot-form">
              <iframe
                src={hubspotFormUrl}
                title="UFB DUAL®導入に関するお問い合わせフォーム"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-company">
              <img src="/assets/original/ufbtech-logo-white-color-mark.png" width="893" height="152" alt="UFB TECH株式会社" />
              <p>UFB TECH株式会社</p>
            </div>
            <address>
              〒104-0028<br />
              東京都中央区八重洲2-1-1 YANMAR TOKYO 12階
            </address>
            <nav aria-label="フッターナビゲーション">
              <a href="https://ufbtech-co.jp/">公式サイト</a>
              <a href={contactUrl}>お問い合わせ</a>
            </nav>
          </div>
          <p className="photo-note">掲載写真は一部イメージを含みます。設備仕様・設置方法は、施設条件および現地調査の結果により異なります。</p>
          <p className="copyright">© UFB TECH Inc. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
