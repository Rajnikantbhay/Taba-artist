export const FounderComponent = ({photo, alt, about, name ,title, icon, iconAlt, id}) => {
   return <div class="container my-12" id={id}>
  <section >
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="flex flex-wrap">
        <div class="basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={photo} alt={alt}
            class=" h-full object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-0 text-2xl font-redhat">
              {name}
            </h2>
            <p class="mb-6 flex items-center font-bold text-sm uppercase">
              <img src={icon} className='mr-2 h-4 w-4' alt={iconAlt} />
              {title}
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Earum maxime voluptas ipsam aliquam itaque cupiditate
              provident architecto expedita harum culpa odit, inventore rem
              molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
              fuga omnis ducimus.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem
              repellat explicabo, reiciendis illum suscipit iusto? Provident
              dignissimos similique, reiciendis inventore accusantium unde
              mollitia, deleniti quae atque error id perspiciatis illum.
              Laboriosam aperiam ab illo dignissimos obcaecati corporis
              similique a odio, optio iste quis placeat alias amet rerum
              sint quos dolor pariatur inventore possimus ad consequuntur
              fugiat perferendis consectetur laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
}