import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { toast } from "vue-sonner";

export interface Plant {
  id: number;
  image: string;
  name: string;
  description: string;
  tags: string[];
  wateringFrequency: number;
  scientificName: string;
  type: "garden" | "vegetal" | "fruit" | "flower";
  price: number;
  quantity: number;
}

interface AddPlant {
  plant: Plant;
}

interface UpdatePlant {
  plant?: Plant;
}

interface DeletePlant {
  id: number;
}

export const usePlantsStore = defineStore("plants", () => {
  const plants = ref<Plant[]>([
    {
      id: 0,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711053382/portfolio/garden-app/plants/cacatus-a_kdl2ap.png",
      name: "Cactus tipo B",
      type: "garden",
      description:
        "Los cactus tipo B son plantas suculentas que almacenan agua en sus hojas y tallos. Por lo tanto, no necesitan un riego constante. Se recomienda regarlos cada 2 o 3 semanas, dependiendo de la humedad del suelo y del clima.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Euphorbia trigona",
      price: 10,
      quantity: 1,
    },
    {
      id: 1,
      name: "Snake Plant",
      type: "garden",
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711053900/portfolio/garden-app/plants/snake_plant_oogkei.png",
      description:
        "La planta de serpiente es una planta suculenta que almacena agua en sus hojas y tallos. Por lo tanto, no necesita un riego constante. Se recomienda regarla cada 2 o 3 semanas, dependiendo de la humedad del suelo y del clima.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Dracaena trifasciata",
      price: 15,
      quantity: 1,
    },
    {
      id: 2,
      name: "Peace Lily",
      type: "flower",
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711054146/portfolio/garden-app/plants/peace_lily_aexp2y.png",
      description:
        "El lirio de la paz necesita un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlo de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Flowering"],
      wateringFrequency: 2,
      scientificName: "Spathiphyllum wallisii",
      price: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: "Monstera",
      type: "garden",
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711054146/portfolio/garden-app/plants/montserrat_v0pxuk.png",
      description:
        "La monstera necesita un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarla de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Monstera deliciosa",
      price: 25,
      quantity: 1,
    },
    {
      id: 4,
      name: "Rose",
      type: "flower",
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711054145/portfolio/garden-app/plants/rose_bwg7xo.png",
      description:
        "Las rosas necesitan un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlas de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Outdoor", "Flowering"],
      wateringFrequency: 2,
      scientificName: "Rosa",
      price: 30,
      quantity: 1,
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711053798/portfolio/garden-app/plants/lechuga_cdwkp9.png",
      name: "Lechugas",
      type: "vegetal",
      description:
        "Las lechugas necesitan un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlas de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Lactuca sativa",
      price: 35,
      quantity: 1,
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711053391/portfolio/garden-app/plants/rabanitos_cu2hyl.png",
      name: "Rabanitos",
      type: "vegetal",
      description:
        "Los rabanitos necesitan un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlos de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Raphanus sativus",
      price: 40,
      quantity: 1,
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711053382/portfolio/garden-app/plants/cactus-b_kryp3n.png",
      name: "Cactus Alto",
      type: "garden",
      description:
        "Los cactus tipo A son plantas suculentas que almacenan agua en sus hojas y tallos. Por lo tanto, no necesitan un riego constante. Se recomienda regarlos cada 2 o 3 semanas, dependiendo de la humedad del suelo y del clima.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Euphorbia trigona",
      price: 45,
      quantity: 1,
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711045549/portfolio/garden-app/plants/zanahorias_sqlfkm.png",
      name: "Zanahorias",
      type: "vegetal",
      description:
        "Las zanahorias necesitan un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlas de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Daucus carota",
      price: 50,
      quantity: 1,
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711045121/portfolio/garden-app/plants/tomates_beohja.png",
      name: "Tomates",
      type: "vegetal",
      description:
        "Los tomates son plantas anuales que requieren de un riego constante para mantener el suelo húmedo. Se recomienda regarlos de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Dracaena trifasciata",
      price: 55,
      quantity: 1,
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/react-romel/image/upload/v1711054449/portfolio/garden-app/plants/papaya_l6ivqw.png",
      name: "Papaya",
      type: "fruit",
      description:
        "Las papayas necesitan un riego constante para mantener el suelo húmedo, pero no encharcado. Se recomienda regarlas de 2 a 3 veces por semana, dependiendo de la humedad del suelo y del clima. Es importante no mojar las hojas para evitar enfermedades.",
      tags: ["Indoor", "Foliage"],
      wateringFrequency: 2,
      scientificName: "Dracaena trifasciata",
      price: 60,
      quantity: 1,
    },
  ]);
  const myPlants = ref<Plant[]>([]);

  function existPlant(id: number) {
    return myPlants.value.some((p) => p.id === id);
  }

  // funciones para agregar a las plantas generales
  function addPlant({ plant }: AddPlant) {
    plants.value.push(plant);
  }

  function updatePlant({ plant }: UpdatePlant) {
    plants.value = plants.value.map((p) => {
      if (p.name === plant?.name) {
        return plant;
      }
      return p;
    });
  }

  function deletePlant({ id }: DeletePlant) {
    plants.value = plants.value.filter((p, index) => p.id !== id);
  }

  // funciones para agregar a mis plantas

  function addMyPlant(id: number) {
    console.log({ id });
    const plant = plants.value.find((plant) => plant.id === id);
    console.log({ plant });
    if (!plant) {
      console.log("No existe la planta");
      toast.error("No existe la planta");
      return;
    }
    if (existPlant(id)) {
      console.log("Ya existe la planta");
      // alert("Ya existe la planta");
      toast.error("Ya existe la planta");
      return;
    }
    myPlants.value.push(plant);
    toast.success("Planta agregada");
    console.log({ myPlants: myPlants.value });
  }

  function updateMyPlant({ plant }: UpdatePlant) {
    console.log({ plant });
    myPlants.value = myPlants.value.map((p) => {
      if (p.name === plant?.name) {
        return plant;
      }
      return p;
    });
  }

  function deleteMyPlant(id: number) {
    console.log({ id });
    // myPlants.value = myPlants.value.filter((p, index) => index !== id);
    const deletedPlant = myPlants.value.find((plant) => plant.id === id);
    console.log({ deletedPlant });

    if (!deletedPlant) {
      console.log("No existe la planta");
      alert("No existe la planta");
      return;
    }

    myPlants.value = myPlants.value.filter((p) => p !== deletedPlant);

    console.log({ myPlants: myPlants.value });
  }

  return {
    plants,
    myPlants,
    existPlant,
    addPlant,
    updatePlant,
    deletePlant,
    addMyPlant,
    updateMyPlant,
    deleteMyPlant,
  };
});
