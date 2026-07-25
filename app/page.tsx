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
    title: "毎日触れる水を付加価値に",
    text: "各シャワーヘッドの交換ではなく、給水系統から施設共通のUFB水を届けます。",
    image: "shower",
    alt: "温浴施設のシャワーから流れる水に触れる手",
  },
  {
    key: "pipe",
    no: "03",
    place: "配管・シャワーホース",
    title: "見えない内側にもアプローチ",
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

const trustItems = [
  {
    no: "01",
    title: <>JWWA・JET<br />給水器具関連認証</>,
    text: "JWWAの認証登録およびJETの給水器具等認証を取得したモデルを用意しています。",
  },
  {
    no: "02",
    title: <>水利協<br />推奨製品</>,
    text: "バイオフィルム除去に関する効果が認められた推奨製品です。",
  },
  {
    no: "03",
    title: <>外部電源・ポンプ<br />薬剤不要</>,
    text: "水流を利用してUFBを生成。薬剤やカートリッジも使用しません。",
  },
  {
    no: "04",
    title: <>小口径から大口径<br />10年保証</>,
    text: "施設規模や配管口径に合わせて選定し、長期運用を支えます。",
  },
] as const;

const organizationId = "https://ufbtech-co.jp/#organization";
const productId = `${siteUrl}/#product`;
const serviceId = `${siteUrl}/#service`;

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
      "@type": "Product",
      "@id": productId,
      name: "UFB DUAL®",
      alternateName: ["UFB DUAL", "UFBDUAL"],
      category: "温浴施設向け配管直結型ウルトラファインバブル生成ノズル",
      description:
        "給水本管へ設置して施設内へUFB水を供給する配管直結型ウルトラファインバブル生成ノズル。温浴施設の全館UFBと人工炭酸泉設備の構成を提案します。",
      image: [`${siteUrl}/assets/web/ufb-dual-50a.webp`],
      brand: {
        "@type": "Brand",
        name: "UFB DUAL®",
      },
      manufacturer: {
        "@type": "Organization",
        name: "株式会社ウォーターデザイン",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "設置方式", value: "建物の給水本管へ設置" },
        {
          "@type": "PropertyValue",
          name: "供給範囲",
          value: "浴槽・浴室・シャワー・洗面・厨房・ランドリーなど",
        },
        {
          "@type": "PropertyValue",
          name: "動力・消耗品",
          value: "外部電源・ポンプ・薬剤・カートリッジ不要",
        },
        { "@type": "PropertyValue", name: "保証", value: "10年保証" },
      ],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "温浴施設向け UFB DUAL® 導入提案",
      serviceType: "全館UFB・人工炭酸泉設備の導入支援",
      provider: { "@id": organizationId },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "温浴施設運営事業者",
      },
      description:
        "施設の配管状況、浴槽容量、現在の炭酸ガス使用量を確認し、設備構成と導入方法を提案します。",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "UFB TECH株式会社 温浴施設向け UFB DUAL®",
      inLanguage: "ja-JP",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "温浴施設向け UFB DUAL®｜全館UFB・人工炭酸泉設備",
      description:
        "温浴施設向けUFB DUAL®。全館UFBによる水環境づくりと、人工炭酸泉装置による炭酸ガス使用量の削減を提案します。",
      inLanguage: "ja-JP",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: [{ "@id": organizationId }, { "@id": productId }],
      mainEntity: [{ "@id": productId }, { "@id": serviceId }],
      publisher: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.jpg`,
      },
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
                src="/assets/original/ufbtech-logo.png"
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
              <a href="#trust">製品の信頼性</a>
              <a className="header-cta" href={contactUrl}>お問い合わせ</a>
            </nav>
            <details className="mobile-menu">
              <summary aria-label="メニューを開く"><span /><span /><span /></summary>
              <nav aria-label="スマートフォン用ナビゲーション">
                <a href="#issues">温浴施設の課題</a>
                <a href="#solutions">UFB DUAL®による解決</a>
                <a href="#whole-facility">全館UFB</a>
                <a href="#scenes">活用シーン</a>
                <a href="#trust">製品の信頼性</a>
                <a href={contactUrl}>お問い合わせ</a>
              </nav>
            </details>
          </header>

          <div className="container hero-content" id="top">
            <div className="hero-copy">
              <p className="kicker">温浴施設向け ウルトラファインバブルのご提案</p>
              <h1 id="hero-title">衛生管理と、<br />炭酸泉コストに<span className="mobile-only"><br /></span>答えを。</h1>
              <p className="hero-lead">
                レジオネラ属菌対策に関わるバイオフィルムと、値上がりが続く炭酸ガス。
                UFB DUAL®が、温浴施設の2つの重要課題を解決へ導きます。
              </p>
              <a className="button" href={contactUrl}>導入について相談する</a>
            </div>
          </div>

          <img
            className="hero-product"
            src="/assets/web/ufb-dual-50a-1440.webp"
            srcSet="/assets/web/ufb-dual-50a-960.webp 960w, /assets/web/ufb-dual-50a-1440.webp 1440w, /assets/web/ufb-dual-50a.webp 2000w"
            sizes="(max-width: 700px) 0px, 47vw"
            alt="給水本管へ設置するUFB DUAL® 50A"
            width="2000"
            height="1123"
            loading="eager"
            decoding="async"
          />
          <div className="hero-message" aria-label="2つの主要提案">
            <div><small>HYGIENE</small><strong>バイオフィルム対策</strong></div>
            <div><small>RUNNING COST</small><strong>炭酸ガス40％以上削減</strong></div>
          </div>
        </section>

        <section className="issues" id="issues">
          <div className="container">
            <header className="section-head">
              <p className="kicker">温浴施設が抱える2つの課題</p>
              <h2 className="title">目に見えない衛生リスクと、<br />増え続ける運営コスト。</h2>
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
                  <h3>炭酸ガスの値上がりが、<br />目玉風呂の負担に。</h3>
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
            <p className="solution-bridge">衛生管理の強化と、炭酸泉コストの削減を同時に。</p>
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
                    className="solution-product"
                    src="/assets/web/ufb-dual-50a-960.webp"
                    srcSet="/assets/web/ufb-dual-50a-960.webp 960w, /assets/web/ufb-dual-50a-1440.webp 1440w, /assets/web/ufb-dual-50a.webp 2000w"
                    sizes="(max-width: 700px) 64vw, 29vw"
                    alt="UFB DUAL® 50A"
                    width="2000"
                    height="1123"
                    loading="lazy"
                  />
                </div>
                <div className="solution-body">
                  <span className="solution-type">配管直結型UFB生成ノズル</span>
                  <h3>給水本管から、<br />建物全体をUFB水へ。</h3>
                  <p>建物の給水本管にUFB DUAL®を設置。浴槽、浴室、シャワーホース、洗面、厨房、ランドリーなど、水が流れる場所へUFB水を届けます。</p>
                  <div className="metric">
                    <small>公益社団法人 全国水利用設備環境衛生協会</small>
                    <strong>水利協 推奨製品</strong>
                  </div>
                  <ul className="solution-points">
                    <li>バイオフィルム除去に関する効果が認められています</li>
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
                  <h3>効率よく溶解し、<br />少ないガスで炭酸泉を。</h3>
                  <p>UFB技術で炭酸ガスを微細化し、効率よく水へ溶解。既存の人工炭酸泉にも、新たな目玉風呂の導入にも対応します。</p>
                  <div className="metric">
                    <small>従来方式比・炭酸ガス使用量</small>
                    <strong><em>40％以上</em> 削減</strong>
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
              <h2>ひとつの設備から、<br />水を使うすべての場面へ。</h2>
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
              <p className="kicker">各シーンで期待できるメリット</p>
              <h2 className="title">施設の水を変えると、<br />日々の運営が変わる。</h2>
              <p className="lead">利用者が触れる水から、清掃・洗浄・配管管理まで。UFB水の活用範囲は館内全体へ広がります。</p>
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
              <p className="kicker">導入を支える製品仕様</p>
              <h2 className="title">給水本管へ設置する設備。<br />信頼性にも配慮。</h2>
            </header>
            <div className="trust-grid">
              {trustItems.map((item) => (
                <article className="trust-item" key={item.no}>
                  <span>{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <ResponsiveImage name="open-air-bath" alt="温浴施設の露天風呂" className="cover-image" />
          <div className="cta-overlay" aria-hidden="true" />
          <div className="container cta-content">
            <p className="kicker">お問い合わせ</p>
            <h2>既存施設の改善も、<br />新しい炭酸泉の導入も。</h2>
            <p>施設の配管状況、浴槽容量、現在の炭酸ガス使用量を確認し、<br />設備構成と導入方法をご提案します。</p>
            <div className="cta-tags">
              <span>既存施設</span><span>新設施設</span><span>炭酸泉の新規導入</span><span>炭酸ガス費用の見直し</span>
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
              <img src="/assets/original/ufbtech-logo.png" width="893" height="152" alt="UFB TECH株式会社" />
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
