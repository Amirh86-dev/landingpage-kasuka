import React, { Component } from "react";
import styled from "../main.module.css";
import Benefits from "./Benefits";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className={styled.sectionIntroduction}>
            <div className={styled.introductionImgBox}>
              <img
                className={styled.img}
                src="./assets/images/about.jpg"
                alt=""
              />
            </div>
            <div className={styled.introductionTextBox}>
              <div>
                <h3 className={styled.introductionTextBoxTitle}>
                  شرکت دیجیتال کاسوکا
                </h3>
                <p className={styled.introductionTextBoxdesc}>
                  شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت
                  دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی
                  روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب
                  و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و
                  با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در
                  ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی
                  بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه
                  فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده
                  مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت
                  و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان،
                  نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
                </p>
              </div>
              <div className={styled.Benefitsbox}>
                <Benefits text="۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی" />
                <Benefits text="تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد." />
                <Benefits text="برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید" />
              </div>
              <div>
                <p className={styled.introductionTextBoxdesc}>
                  خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار
                  از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از
                  برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا
                  مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می
                  گردد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
