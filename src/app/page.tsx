import BlogConteiner from "@/components/content/BlogConteiner";
import InfoBoxConteiner from "@/components/content/InfoBoxConteiner";
import InfoContainer from "@/components/content/InfoContainer";
import LeaderShipConteiner from "@/components/content/LeaderShipConteiner";
import OurWorkConteiner from "@/components/content/OurWorkConteiner";

export default function Home() {
  return (
    <>
      <div className="flex flex-col  justify-center items-center h-screen w-screen gap-[40px]">
        <LeaderShipConteiner
          iconLink1={"/Andrey.png"}
          title={
            "Andrey has 15+ years of software development leadership experience. An entrepreneur and talented developer in his own right, he now focuses on delivering the teams and products that enable other businesses to succeed. Within five years of starting his career in tech at age 19, Andrey had played a key role in creating a successful cloud synchronization startup that was sold to a Fortune 500 company. Since relocating the business to the US in 2012, he has overseen the exponential growth that has earned Distillery a rank on the Inc. 5000 every year since 2017."
          }
          functions={"CEO AND FOUNDER"}
          name={"Andrey Kudievskiy"}
        />
        <LeaderShipConteiner
          iconLink1={"/Gregg.png"}
          title={
            "Gregg brings 25+ years of experience as a growth leader &amp; strategic advisor for executives in the digital transformation and technology consulting sectors. He is focused on building, supporting and mentoring our high-performing sales and marketing teams in order to create strong relationships with our clients and deliver high-quality solutions to help them achieve their goals. Prior to joining Distillery, Gregg was the Chief Growth Officer at Solstice and Kin + Carta, leading the growth of strategic revenues and building foundational growth platforms. Gregg studied Finance at the Gies College of Business at the University of Illinois, and early in his career, he held a variety of technology roles at Accenture and JP Morgan Chase."
          }
          functions={"CHIFF REVENUE OFFICER"}
          name={"Gregg Wheeler"}
          reverse={true}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen">
        <BlogConteiner
          title={"2024 Top Tech Trends and Challenges"}
          iconLink1={"/blog1.png"}
          info={
            "As we close out 2024, it’s time to reflect on the year’s most significant tech trends and challenges, drawing insights from our team at Distillery. This year saw a..."
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen gap-[40px] ">
        <InfoBoxConteiner
          iconLink1={"/Sixgill-Logo-2.png"}
          iconLink2={"/Phil-Resler.png"}
          title={"Phil Ressler"}
          info={
            " “We’ve used Distillery extensively for both web app and mobile app development projects. They consistently provide high-qualitydevelopers and afford us a cost-effective flexibility we didn’t havebefore. In turn, this allows us to rapidly provide high-qualitysolutions for our clients.” "
          }
          functions={"CEO, Sixgill"}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen gap-[40px] md:gap-[20px]">
        <OurWorkConteiner
          title={"Shaving seconds off millons of transactions."}
          iconLink1={"/ourWorkLogo1.svg"}
          background={"/ourWork1.png"}
        />
        <OurWorkConteiner
          title={"Transforming legal referral processes."}
          iconLink1={"/ourWorkLogo2.png"}
          background={"/ourWork2.png"}
        />
        <OurWorkConteiner
          title={
            "Upgrading a web application to enhance efficiency and accuracy."
          }
          iconLink1={"/ourWorkLogo3.svg"}
          background={"/ourWork3.png"}
        />
      </div>

      <div className="flex flex-col justify-center items-center h-screen w-screen gap-[40px] ">
        <InfoContainer
          title={"Staff Augmentation"}
          iconLink1={"/people1.png"}
          iconLink2={"/StaffAugmentation.png"}
        />
        <InfoContainer
          title={"Agile Development Teams"}
          iconLink1={"/people2.jpg"}
          iconLink2={"/Agile-Teams.png"}
        />
      </div>
    </>
  );
}
