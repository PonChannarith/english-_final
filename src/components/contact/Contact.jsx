import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="container mx-auto">
        {/* First Section */}
        <div className="relative w-full md:w-[1164px] h-[290px] mx-auto">
          <div className="absolute left-0 md:left-[95px] top-[60px] text-violet-950 text-4xl font-bold font-suwannaphum">
            ទំនាក់ទំនងមកពួកយើង
          </div>
          <div className="absolute left-0 md:left-[584px] top-0">
            <img
              className="w-[580px] h-[290px] object-cover"
              src="../src/assets/contactUS.jpg"
              alt="Contact Us"
            />
          </div>
          <div className="absolute left-0  top-[145px] w-[511px] h-[108px]">
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              សួស្ដី! សូមស្វាគមន៍មកកាន់
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              គេហទំព័រ
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              របស់យើងមិនថាអ្នកមាន
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              ចម្ងល់
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              ឬត្រូវការការណែនាំដែលទាក់ទងទៅនឹងសំណួរផ្សេងៗ សូមចូលទៅកាន់
            </span>
            <span className="text-orange-500 text-lg font-normal font-suwannaphum">
              ប្រអប់សារ
            </span>
            <span className="text-zinc-800 text-lg font-normal font-suwannaphum">
              ដើម្បីផ្ញើសារមកកាន់ក្រុមការងាររបស់យើងអាចជួយដោះស្រាយជូន។
            </span>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative w-full md:w-[1352px] h-[507px] mx-auto">
          <div className="absolute left-0 md:left-[543px] top-0 w-[809px] h-[507px]">
            <div className="absolute left-0 md:left-[398px] top-[75px] w-[280.77px] h-[50px] bg-zinc-300/opacity-20 rounded-[10px] border border-black/opacity-50" />
            <div className="absolute left-0 md:left-[411px] top-[87px] w-[211px] text-zinc-500 text-sm font-normal font-suwannaphum">
              លេងទូរស័ព្ទ
            </div>
            <div className="absolute left-0 md:left-[29px] top-[191px] w-[650px] h-[50px] bg-zinc-300/opacity-20 rounded-[10px] border border-black/opacity-50" />
            <div className="absolute left-0 md:left-[42px] top-[203px] w-[195px] text-zinc-500 text-sm font-normal font-suwannaphum">
              បញ្ចូលអុីមែលរបស់អ្នក
            </div>
            <div className="absolute left-0 md:left-[35px] top-[158px] w-[60px] text-black text-lg font-normal font-suwannaphum">
              អុីមែល
            </div>
            <div className="absolute left-0 md:left-[38px] top-[278px] w-[106px] text-black text-lg font-normal font-suwannaphum">
              ផ្ញើសារ
            </div>
            <div className="absolute left-0 md:left-[293px] top-[398px] w-[103px] h-[41px] bg-emerald-500 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-100 text-lg font-bold font-suwannaphum">
                បញ្ជូន
              </div>
            </div>
            <div className="absolute left-0 md:left-[34px] top-[41px] w-[107px] h-[25px] text-black text-lg font-normal font-suwannaphum">
              ឈ្មោះ
            </div>
            <div className="absolute left-0 md:left-[29px] top-[75px] w-[341.67px] h-[50px] bg-zinc-300/opacity-20 rounded-[10px] border border-black/opacity-50">
              <div className="absolute left-[13px] top-[12px] text-neutral-500 text-sm font-normal font-suwannaphum">
                បញ្ចូលឈ្មោះរបស់អ្នក
              </div>
            </div>
            <div className="absolute left-0 md:left-[29px] top-[311px] w-[650px] h-[50px] px-[13px] py-3 bg-zinc-300/opacity-20 rounded-[10px] border border-black/opacity-50 justify-start items-center gap-2.5 inline-flex">
              <div className="text-zinc-500 text-sm font-normal font-suwannaphum">
                បញ្ចូលសាររបស់អ្នក
              </div>
            </div>
          </div>
          <img
            className="w-[503px] h-[409px] left-0 md:left-auto top-[15px] absolute"
            src="../src/assets/login.jpg"
          />
        </div>
      </div>
    </>
  );
}
