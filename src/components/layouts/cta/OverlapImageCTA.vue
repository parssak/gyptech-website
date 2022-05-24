<template>
  <div class="relative py-16 bg-white">
    <div class="max-w-7xl mx-auto bg-accent-dark lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div
          class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
        >
          <div
            class="absolute inset-x-0 h-1/2 bg-white lg:hidden"
            aria-hidden="true"
          />
          <div
            class="max-w-lg mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0"
          >
            <div
              class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1"
            >
              <img
                class="object-cover object-center rounded-lg shadow-2xl"
                src="@/assets/images/cutter.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class="relative bg-accent-dark lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:grid lg:grid-cols-10 lg:items-center"
        >
          <div
            class="hidden absolute inset-0 overflow-hidden rounded lg:block"
            aria-hidden="true"
          >
            <img
              src="@/assets/icons/cicuitry.svg"
              class="absolute top-0"
              alt=""
            />
            <div
              class="absolute bottom-0 right-0 translate-y-2/3 h-96 w-[30rem] transform rotate-180"
            >
              <img
                src="@/assets/icons/cicuitry.svg"
                alt=""
                class="transform translate-y-1/2"
              />
            </div>
          </div>
          <div
            class="relative max-w-lg mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
          >
            <h2
              class="text-3xl font-extrabold text-white mb-4"
              id="join-heading"
            >
              Proven Technology Worldwide
            </h2>
            <p class="text-lg text-white">
              Gyptech has established a strong reputation of providing high
              quality, reliable equipment for wallboard production. Designed,
              built, installed and backed by extensive industry experience. We
              stand behind our reputation. We stand out because of our
              commitment to customer success. Our startups are completed faster
              and our equipment exceeds expectations for quality and
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
