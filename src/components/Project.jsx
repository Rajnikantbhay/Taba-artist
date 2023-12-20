function Catalog() {
  return (
    <section className="px-12 py-12 bg-black text-white w-full">
        <h1 className="text-left mb-6 font-nosifer text-5xl tracking-wide">OUR PROJECTS</h1>
        <div className="flex h-64 mb-20">
            <div className='w-3/5 h-full mr-12'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fcarousel3.webp?alt=media&token=fc83739c-653b-4442-ac42-f8926bb387ca'} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="flex-1">
                <div className="text-left">
                    <h2 className="uppercase text-3xl font-bold mb-2">Heading</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, laborum dignissimos blanditiis rem est, repellendus temporibus fuga maiores dolorum illo repudiandae in eos totam voluptatibus, consectetur suscipit sunt? Hic, ex.</p>
                </div>
            </div>
        </div>
        {/* second div */}
        <div className="flex h-64">
        <div className="flex-1">
                <div className="text-left">
                    <h2 className="uppercase text-3xl font-bold mb-2">Heading</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, laborum dignissimos blanditiis rem est, repellendus temporibus fuga maiores dolorum illo repudiandae in eos totam voluptatibus, consectetur suscipit sunt? Hic, ex.</p>
                </div>
            </div>
            <div className='w-3/5 h-full mr-12'>
                <img src={'https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/media%2Fcarousel3.webp?alt=media&token=fc83739c-653b-4442-ac42-f8926bb387ca'} className="h-full w-full object-cover" alt="" />
            </div>
        </div>
    </section>
  );
}

export default Catalog;