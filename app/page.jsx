import Banner from '@components/Banner'
import Header from '@components/Header'
import SmallCard from '@components/SmallCard';

import React from 'react'


const page = ({ data }) => {
  console.log({data})
  return (
  <div className=''>
<Header/>
<Banner/>

<main className="max-w-7xl mx-auto px-8 sm:px-16">
  <section className="pt-6 ">
    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
    {/* pull data from a server */}
    {
      data?.map((item)=> (
      <SmallCard 
      key={item.img}
      img={item.img}
      distance={item.distance}
      location={item.location}
      />
      ))
    }
  </section>
</main>
  </div>
  );
};
export default page;


export async function getStaticProps() {
  
const data = await fetch('https://www.jsonkeeper.com/b/4G1G')
.then(
  (res) => res.json()
);
return {
  props: {
data: data
  },
};
}


// https://www.jsonkeeper.com/b/4G1G