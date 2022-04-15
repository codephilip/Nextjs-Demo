const ProductForm = () => {
  return (
    <form
      class="relative w-screen bg-white divide-gray-100 rounded-lg shadow-md"
      role="dialog"
      aria-label="Filters"
    >
      <header class="p-6 text-center">
        <p class="text-lg font-medium">Search Services</p>
      </header>

      <div class="grid place-items-center p-6 border-2 border-black overflow-y-auto h-80">
        <div class="-my-8 ">
          <div class="py-2">
            <fieldset>
              <legend class="text-xl font-medium">Servive Type</legend>

              <ul class="grid gap-1 mt-3 sm:grid-cols-4">
                <li>
                  <label class="flex items-center text-sm">
                    <input type="radio" class="w-6 h-6 border-gray-200" />
                    <span class="ml-3 font-medium">words</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="radio"
                      class="w-6 h-6 border-gray-200"
                      checked
                    />
                    <span class="ml-3 font-medium ">Postgraduate</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-2">
            <fieldset>
              <legend class="text-xl font-medium">Locations</legend>

              <ul class="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-4">
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md checked:bg-orange-500"
                    />
                    <span class="ml-3 font-medium">Bozeman</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Billings</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Butte</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Ennis</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>

          <div class="py-2">
            <fieldset>
              <legend class="text-xl font-medium">University Rating</legend>

              <ul class="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-4">
                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Rated 1+</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Rated 2+</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Rated 3+</span>
                  </label>
                </li>

                <li>
                  <label class="flex items-center text-sm">
                    <input
                      type="checkbox"
                      class="w-6 h-6 border border-gray-200 rounded-md"
                    />
                    <span class="ml-3 font-medium">Rated 4+</span>
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
        </div>
      </div>

      <footer class="flex items-center justify-between p-6">
        <button
          class="text-sm font-medium text-gray-600 underline"
          type="button"
        >
          Clear all
        </button>

        <button
          class="px-5 py-3 font-medium text-white bg-orange-500 rounded-lg"
          type="submit"
        >
          Show results
        </button>
      </footer>
    </form>
  );
};

export default ProductForm;
