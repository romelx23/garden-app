import { defineStore } from "pinia";
import { ref } from "vue";
import { Plant, usePlantsStore } from "./plants";

// export interface PlantCart extends Plant {
//   quantity: number;
// }

export const useCartStore = defineStore("cart", () => {
  const showBar = ref(false);
  const productsCart = ref<Plant[]>([]);
  const plantStore = usePlantsStore();

  const toggleBar = () => {
    showBar.value = !showBar.value;
  };

  const addProduct = (product: Plant | null) => {
    // let quantity = 1;
    // add quantity to product
    // if (product) {
    //   const index = productsCart.value.findIndex((p) => p.id === product.id);

    //   if (index !== -1) {
    //     productsCart.value[index].quantity++;
    //     return;
    //   }
    // }
    // const newProduct = { ...product, quantity };
    console.log(product);

    productsCart.value.push(product as Plant);
  };

  const addQuantity = (product: Plant | null) => {
    if (product) {
      const index = plantStore.plants.findIndex((p) => p.id === product.id);
      console.log(index);

      if (index !== -1) {
        plantStore.plants.map((p) => {
          if (p.id === product.id) {
            p.quantity++;
          }
          return p;
        });
      }
    }
  };

  const removeQuantity = (product: Plant | null) => {
    console.log(product);
    if (product) {
      const index = plantStore.plants.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        // if quantity is < 1, remove product
        console.log(index);
        // let quantity = productsCart.value[index].quantity;
        // if (quantity <= 1) {
        //   console.log("removido");
        //   removeProduct(product);
        //   return;
        // }
        if (plantStore.plants[index].quantity > 1) {
          console.log("restado");
          plantStore.plants.map((p) => {
            if (p.id === product.id) {
              p.quantity--;
            }
            return p;
          });
        } else {
          console.log("removido");
          removeProduct(product);
        }
      }
    }
  };

  const removeProduct = (product: Plant | null) => {
    console.log(product);
    const index = productsCart.value.findIndex((p) => p.id === product?.id);

    if (index !== -1) {
      productsCart.value.splice(index, 1);
    }
  };

  const existsProduct = (product: Plant | null) => {
    console.log(product);
    return productsCart.value.some((p) => p.id === product?.id);
  };

  const totalProducts = () => {
    return productsCart.value.length > 0
      ? productsCart.value.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      : 0;
  };

  return {
    showBar,
    toggleBar,
    productsCart,
    addProduct,
    removeProduct,
    existsProduct,
    totalProducts,
    addQuantity,
    removeQuantity,
  };
});
