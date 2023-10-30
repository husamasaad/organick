import Banner from "@/components/Banner";
import Image from "next/image";


export default function Quality() {
  return (
    <main className='overflow-hidden'>
      <Banner bgUrl="/quality-bg.jpg" title="Quality Standards" />
      <section className="px-6 md:px-60 py-12">
        <Image 
          src="/qualityImg.png"
          alt="Qualityt Standards"
          width={1400}
          height={742}
        />
        <h2 className='heading-3 !leading-[45px] text-primary my-8'>
          Organic Store Services
        </h2>
        <p className='paragraph mt-6 text-body-text mb-8'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        <p className='paragraph mt-6 text-body-text'>
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
        </p>
      </section>
      <section className="px-6 md:px-60 py-12">
        <div className="flex flex-col md:flex-row gap-6">
          <Image 
            src="/whyOrganic.png"
            alt="why organics"
            width={379}
            height={252}
            className="w-full md:w-1/2 h-auto rounded-2xl"
          />
          <div className="w-full md:w-1/2 p-12 bg-[#F9F8F8] rounded-2xl flex justify-center flex-col">
            <h4 className='paragraph text-primary font-bold'>Why Organic</h4>
            <p className='paragraph mt-6 text-body-text pl-6 md:pl-0'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6 mt-8">
          <Image 
            src="/speciality.jpg"
            alt="speciality"
            width={379}
            height={252}
            className="w-full md:w-1/2 h-auto rounded-2xl"
          />
          <div className="w-full md:w-1/2 p-12 bg-[#F9F8F8] rounded-2xl flex justify-center flex-col">
            <h4 className='paragraph text-primary font-bold'>Speciality Produce</h4>
            <p className='paragraph mt-6 text-body-text pl-6 md:pl-0'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-60 py-12">
        <h2 className='heading-3 !leading-[45px] text-primary mb-8'>
          We farm your land
        </h2>
        <p className='paragraph mt-6 text-body-text mb-8'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="w-full md:w-1/2 p-6 bg-[#F9F8F8] rounded-[100px] flex items-center gap-12 ">
            <span className="h-16 w-16 rounded-full bg-secondary flex-center text-2xl text-white font-bold">01</span>
            <h4 className='paragraph text-primary font-bold'>Best quality support</h4>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-[#F9F8F8] rounded-[100px] flex items-center gap-12">
            <span className="h-16 w-16 rounded-full bg-secondary flex-center text-2xl text-white font-bold">02</span>
            <h4 className='paragraph text-primary font-bold'>Money back guarantee</h4>
          </div>
        </div>
      </section>
    </main>
  )
}