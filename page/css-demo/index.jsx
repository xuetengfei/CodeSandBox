import React from 'react';
import './index.less';

export default function comModuleA() {
  return (
    <>
      <p className="hasDropcaps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus est fuga
        distinctio molestiae maxime deserunt, obcaecati enim nesciunt ab inventore sed velit nihil!
        Tempora ipsum, similique assumenda accusantium labore aut voluptatum distinctio inventore
        quis ea blanditiis ex, possimus quaerat cumque voluptas illum facilis? Nostrum architecto
        suscipit laudantium expedita quia tempora dolorum voluptas iure nulla quidem nemo doloribus
        quo accusamus dolorem numquam deserunt cum, assumenda, deleniti officia dolore harum minus
        asperiores! Maiores ab amet aliquam delectus adipisci, nisi dolorum sapiente at corporis
        maxime expedita iure cum consequuntur reprehenderit repellat blanditiis inventore facilis
        minima? Doloribus facilis soluta dolores mollitia atque adipisci.
      </p>
      <section>
        <details>
          <summary>
            <h1>more</h1>
          </summary>
          <ul>
            <li>Question 1</li>
            <li>Question 2</li>
            <li>Question 3</li>
            <li>Question 4</li>
            <li>Question 5</li>
          </ul>
        </details>
      </section>
      <section>
        <section>
          <h1>Latest Transactions</h1>
          <h2>Today</h2>
          <details>
            <summary>
              <h3>
                <strong>American Eagle</strong>
              </h3>
              <span>-39.99 USD</span>
            </summary>
            <div>
              <dl>
                <div>
                  <dt>Time</dt>
                  <dd>4.27pm</dd>
                </div>
                <div>
                  <dt>Card used</dt>
                  <dd>•••• 6890</dd>
                </div>
                <div>
                  <dt>Reference ID</dt>
                  <dd>3125-568911</dd>
                </div>
              </dl>
            </div>
          </details>
        </section>
      </section>
    </>
  );
}
