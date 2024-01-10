import React from 'react'

function Review() {
  return (
    <div className='text-white'>
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl xl:text-6xl font-redhat text-white">Reviews And Testimonials</h2>
				<p className="dark:text-gray-400">Read what people have to say about TABA!!</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 bg-black text-white xl:font-xl font-lg w-90vw">
							<p className='font-lg '>I recently had the pleasure of working TABA, and I couldn't be happier with the results. Their team of artists and designers are truly talented, turning ordinary walls into breathtaking masterpieces.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div className='bg-gray-500 rounded-full'>
								<img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/brands%20logo%20and%20extra%20svg%2Fpainterman.svg?alt=media&token=6a1cc3d1-216d-495b-8702-43d5b3cefc8c" alt="user icon" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								</div>
								<div>
									<p className="text-base font-inter">Adwait</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 bg-black text-white">
							<p className='font-lg '>The seamless integration of art and design showcased their creativity and commitment to delivering a personalized and unique experience.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div className='bg-gray-500 rounded-full'>
								<img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/brands%20logo%20and%20extra%20svg%2Fpainterman.svg?alt=media&token=6a1cc3d1-216d-495b-8702-43d5b3cefc8c" alt="user icon" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								</div>
								<div>
									<p className="text-base font-inter">Renukiran</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 bg-black text-white">
							<p className='font-lg '>From the initial consultation to the final brushstroke, the entire process was smooth and collaborative. The team was professional, punctual, and dedicated to ensuring customer satisfaction.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div className='bg-gray-500 rounded-full'>
								<img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/brands%20logo%20and%20extra%20svg%2Fpainterman.svg?alt=media&token=6a1cc3d1-216d-495b-8702-43d5b3cefc8c" alt="user icon" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								</div>
								<div>
									<p className="text-base font-inter">Belita Design</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 bg-black text-white">
							<p className='font-lg '>What sets this company apart is their versatility. Not only do they excel in traditional wall painting, but their graphic designing skills are also top-notch. They took my ideas and preferences into account, turning them into stunning visual representations that exceeded my expectations.</p>
							<div className="flex items-center mt-4 space-x-4">
								<div className='bg-gray-500 rounded-full'>
								<img src="https://firebasestorage.googleapis.com/v0/b/taba-5c32a.appspot.com/o/brands%20logo%20and%20extra%20svg%2Fpainterman.svg?alt=media&token=6a1cc3d1-216d-495b-8702-43d5b3cefc8c" alt="user icon" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								</div>
								<div>
									<p className="text-base font-inter">Martini Cafe</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Review
