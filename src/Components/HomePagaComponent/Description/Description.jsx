import React from "react";
import s from "./description.module.scss";

const Description = () => {
  return (
    <div className={s.description}>
      <h3 className={s.descHeader}>New IT bu qulay platforma</h3>
      <div className={s.decsBox}>
        <div className={s.info}>
          <h4>This hero</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sapiente aliquam odit earum dignissimos harum recusandae debitis eos
            quas, quod aspernatur aliquid voluptatem voluptatum fugit, ea
            accusamus id! Consectetur laudantium voluptatibus, facilis, quaerat
            aut et maxime laborum, dicta optio quibusdam aliquam unde velit
            animi. Odit, adipisci, blanditiis at doloribus eum aliquid, deserunt
            quidem nulla consequatur saepe minima corrupti voluptas in.
          </p>
        </div>
        <div className={s.info}>
          <h4>This hero</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            repellendus quisquam explicabo sequi unde. Porro possimus, veniam
            cum voluptates asperiores odio doloribus. Perferendis vero sequi
            ipsum debitis quasi ut molestiae magnam, accusamus repellat a
            explicabo sapiente quos iste esse reiciendis doloremque. Officia,
            laboriosam nemo voluptatibus quaerat blanditiis reprehenderit
            pariatur corrupti quod. Obcaecati dolorem quas sapiente alias
            voluptate molestias. Repellat, ab!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
