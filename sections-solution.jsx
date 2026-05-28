/* Sections 6, 7 — 解決策提示 / 投資価値 */

function Solution() {
  return (
    <section className="section" id="course" data-screen-label="06 Solution">
      <div className="wrap">
        <div className="connector reveal">
          <span className="num">06</span>
          <span>The Program</span>
          <span className="bar"></span>
          <span>現場実践型の研修プログラム</span>
        </div>

        <div className="sec-split">
          <h2 className="display lg reveal solution-title" data-d="1">
            <span style={{ display: 'block', fontFamily: 'var(--font-en)', fontSize: 14, letterSpacing: '0.32em', color: 'var(--vermilion)', fontWeight: 500, marginBottom: 18 }}>
              AIリスキリングキャンプ
            </span>
            <span className="st-line">AI最先端を学習 → 2週間の社内実践 → リスク対策で、</span>
            <span className="st-line">「AIを業務に組み込んだ姿」を</span>
            <span className="st-line">自分の手で作りきる。</span>
          </h2>
          <p className="lede reveal" data-d="2">
            社長やDX推進責任者である経営層が、業務にAIを組み込んだ姿を体感し、
            自分の手で業務を変えるツールをAIで自動構築する研修です。
            <strong style={{ color: 'var(--ink)' }}>「何ができ、何が社内を変える鍵なのか」</strong>——
            業務への組み込みを判断する目を、2日間で養います。
          </p>
        </div>

        <div className="course-card reveal" data-d="2">
          <div className="course-header">
            <h3 className="course-title">
              <span className="en">Curriculum / 学習 → 社内実践 → リスク対策</span>
              体感し、自分の手で組み込む。
            </h3>
            <div className="course-meta">
              対象：社長・DX推進責任者<br />
              形式：実機ハンズオン｜少人数制
            </div>
          </div>

          <div className="day-grid">
            <div className="day-card">
              <div className="day-tag">
                <span className="day-tag-word">DAY</span>
                <span className="day-tag-num">1</span>
              </div>
              <h4 className="day-h">AIの基礎と、開発の全工程を手を動かして学ぶ</h4>
              <ul>
                <li>AIの基本知識</li>
                <li>Claudeを使って、講師と一緒にアプリを開発する体験</li>
                <li>デプロイ・データベース設計など、公開までに必要なスキル</li>
                <li>社内でAI推進を進めるために、経営者に必要なマインドセット</li>
              </ul>
            </div>

            <div className="day-card interval-card">
              <div className="day-tag interval-tag">
                <span className="day-tag-word">INTERVAL</span>
                <span className="interval-num">2<span className="interval-num-unit">週間</span></span>
              </div>
              <h4 className="day-h interval-h">
                未来ドリル<br />
                <span className="interval-sub">— 自分の業務改善アプリを、自分の手で作る期間</span>
              </h4>
              <ul>
                <li>実際の業務改善アプリを、ご自身で開発</li>
                <li>期間中は<strong>オンラインで講師に相談可能</strong></li>
                <li>2週間でアウトプットを完成させる「実装の山」</li>
                <li className="interval-li-note">→ Day 1 と Day 2 の間に十分な実装期間があるのが、本研修の最大の特徴。</li>
              </ul>
            </div>

            <div className="day-card">
              <div className="day-tag">
                <span className="day-tag-word">DAY</span>
                <span className="day-tag-num">2</span>
              </div>
              <h4 className="day-h">セキュリティ・リスクとハッカソンで仕上げる</h4>
              <ul>
                <li>セキュリティ・リスクについて、経営者が知っておくべき知識</li>
                <li>ハッカソン形式での実装ワーク</li>
                <li>未来ドリルの成果報告会</li>
                <li>社内展開に向けた、最初のゴーサイン設計</li>
              </ul>
            </div>
          </div>

          <div className="day-deliverables">
            <span className="dd-tag">提供物</span>
            <span className="dd-text">
              受講期間中、<strong>Claude アカウント</strong>を付与いたします。
              （Day 1〜Day 2 終了まで、未来ドリル期間を含む全期間）
            </span>
          </div>

          <div className="hands-on-block">
            <div className="hob-media">
              <image-slot
                id="workshop-photo"
                shape="rect"
                placeholder="ワークショップ風景の写真"
              ></image-slot>
            </div>
            <div className="hob-body">
              <span className="hob-tag">Hands-on Workshop</span>
              <h3 className="hob-title">
                <span className="under">現場実感</span>のある<br />
                実践型のAI研修
              </h3>
              <p className="hob-text">
                少人数のハンズオン形式で、講師が一人ひとりに伴走。
                参加者同士で課題を持ち寄り、議論しながら、自分の業務に組み込むツールを実際に作り上げる。
                座学ではなく「現場で動くもの」を持ち帰る、実践型の2日間です。
              </p>
            </div>
          </div>

          <div className="outcome">
            <p className="text">
              研修終了時、受講者の手元に<br />
              <span style={{ color: 'var(--vermilion)' }}>自分で構築した業務ツールが1本</span>あります。
            </p>
            <span className="pill">＝ 社内ゴーサインの根拠</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ROI() {
  return (
    <section className="section soft" data-screen-label="07 ROI">
      <div className="wrap">
        <div className="connector reveal">
          <span className="num">07</span>
          <span>Return on Investment</span>
          <span className="bar"></span>
          <span>投資価値</span>
        </div>

        <div className="sec-split">
          <h2 className="display lg reveal" data-d="1">
            <span className="under">初年度で受講費が回収できる</span><br />
            投資設計です。
          </h2>
          <p className="lede reveal" data-d="2">
            このコースは「学んで終わり」ではありません。
            終了時点で動く業務ツールが手元に残るため、ROIは曖昧ではなく、数字で語れます。
          </p>
        </div>

        <div className="tuition-block reveal" data-d="2">
          <div className="tuition-main">
            <div className="tuition-label">受講料 ／ 1名</div>
            <div className="tuition-figure">
              <span className="tuition-yen">¥</span>
              <span className="tuition-num">400,000</span>
              <span className="tuition-tax">（税込）</span>
            </div>
          </div>
          <div className="tuition-notes">
            <p>社員研修費として経費処理が可能です。</p>
            <p>
              <strong>補助金</strong>は、雇用保険に加入している場合、対象となる可能性がございます——
              お気軽にご相談ください。
            </p>
          </div>
        </div>

        <div className="ref-outsource reveal" data-d="3">
          <div className="ref-head">
            <span className="ref-tag">参考</span>
            <h3 className="ref-title">これまでの業務アプリ外注費</h3>
          </div>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-num">¥500,000<span className="ref-suffix">〜</span></span>
              <span className="ref-unit">Webサイト 1本</span>
            </div>
            <div className="ref-item">
              <span className="ref-num">¥5,000,000<span className="ref-suffix">〜</span></span>
              <span className="ref-unit">業務システム 1本<br />（規模により数千万〜数億円）</span>
            </div>
          </div>
          <p className="ref-foot">自分で構築できれば、外注1本ぶんで初年度から回収。</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Solution, ROI });
