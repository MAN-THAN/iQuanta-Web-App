import RootLayout from '@/components/layouts/layout';
import React from 'react'

const Home = () => {
  return (
    <div></div>
  )
}
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;