import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function CardDefault({ButtonText, infoText, imgLink, title, id}) {

  const trimText = infoText && infoText.length > 40 ? infoText.slice(0, 100) + '...' : ''
  return (
    <Card className="bg-black text-white max-w-[22rem] group overflow-hidden transform-gpu transition-transform ease-in-out duration-300 hover:scale-110">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 rounded-none bg-blue-400 h-1/2 w-full"
      >
        <div className="w-full h-full bg-yellow-400 ">
        <img
          src={imgLink}
          alt="ui/ux review check"
          className="w-full h-full object-cover"
        />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="text-[#f1f1f1] font-outfit">
          {title}
        </Typography>
        <Typography className="mt-3 mb-0 font-inter font-normal text-sm text-[#aaaaaaa4]">
          {trimText}
        </Typography>
      </CardBody>
      <CardFooter className="flex pt-0 items-center justify-between">
        <div className="flex items-center -space-x-3">
        <Link to={`/ourwork/${id}`}>
        <IconButton className="rounded-full">
          {ButtonText}
        </IconButton>
        </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export function HorizontalCard() {
  return (
    <Card className="w-full bg-black min-w-full flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="white" className="mb-4 font-outfit">
          History about Taba
        </Typography>
        <Typography  className="mb-8 text-sm text-gray-400 font-outfit">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2 bg-[#eeeeee] text-black font-roboto hover:bg-gray-400">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export function Review() {
  return (
      <section class="bg-white py-12 lg:px-12">
  <div class="container px-6 ">
      <h1 class="text-2xl font-redhat text-yello-100 capitalize lg:text-4xl">
          What our <span class="text-blue-500 ">clients</span> say
      </h1>

      <p class="max-w-2xl mt-2 text-gray-500 font-outfit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
          alias, adipisci rem similique, at omnis eligendi optio eos harum.
      </p>
  <div className='main w-full flex bg-red-400 items-start'>
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div class="p-8 border rounded-lg dark:border-gray-700">
              <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div class="mx-2">
                      <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
      {/* 2 */}
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div class="p-8 border rounded-lg dark:border-gray-700">
              <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div class="mx-2">
                      <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
      {/* 3 */}
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          <div class="p-8 border rounded-lg dark:border-gray-700">
              <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                  tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                  aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div class="mx-2">
                      <h1 class="font-semibold text-gray-800 dark:text-white">Robert</h1>
                      <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</section>
  )
}