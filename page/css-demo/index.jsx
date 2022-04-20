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
          <summary>View Frequently asked questions</summary>
          <ul>
            <li>Question 1</li>
            <li>Question 2</li>
            <li>Question 3</li>
            <li>Question 4</li>
            <li>Question 5</li>
          </ul>
        </details>
      </section>
    </>
  );
}
