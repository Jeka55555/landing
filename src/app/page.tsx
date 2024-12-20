import InfoBoxConteiner from "@/components/content/InfoBoxConteiner";
import InfoContainer from "@/components/content/InfoContainer";
import OurWorkConteiner from "@/components/content/OurWorkConteiner";

export default function Home() {
  return (
    <>
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
