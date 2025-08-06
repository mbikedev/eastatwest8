"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { useLightbox } from "../../context/LightboxContext";
import Image from "next/image";
// Removed dynamic import as components are not currently used

// Note: MenuDisplay and VeganMenuDisplay components are currently not used in the main menu
// but are available for future implementation

type Category =
  | "setMenus"
  | "coldMezzes"
  | "hotMezzes"
  | "salads"
  | "lunchDishes"
  | "sandwiches"
  | "skewers"
  | "desserts"
  | "drinks";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  spicy: boolean;
  vegetarian: boolean;
  isMenuDisplay?: boolean;
  isVeganMenuDisplay?: boolean;
  image?: string;
  id?: string;
  section?: string;
};

export default function MenuPage() {
  const { t } = useTranslation("common");
  const { theme } = useTheme();
  const { openLightbox } = useLightbox();
  const [activeCategory, setActiveCategory] = useState<Category>("setMenus");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const openSetMenuModal = (title: string, description: string) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  const categories = [
    { id: "setMenus", name: t("menu.categories.setMenus") },
    { id: "coldMezzes", name: t("menu.categories.coldMezzes") },
    { id: "hotMezzes", name: t("menu.categories.hotMezzes") },
    { id: "salads", name: t("menu.categories.salads") },
    { id: "lunchDishes", name: t("menu.categories.lunchDishes") },
    { id: "sandwiches", name: t("menu.categories.sandwiches") },
    { id: "skewers", name: t("menu.categories.skewers") },
    { id: "desserts", name: t("menu.categories.desserts") },
    { id: "drinks", name: t("menu.categories.drinks") },
  ];

  const menuItems: Record<Category, MenuItem[]> = {
    setMenus: [
      {
        name: t("menu.menuDisplay.title"),
        description: t("menu.setMenus.menuEastWest.description"),
        price: t("menu.menuDisplay.pricePerPerson"),
        spicy: false,
        vegetarian: false,
        isMenuDisplay: true,
        image: "/images/menus/menu-east-at-west.webp",
        id: "menu-east-west",
      },
      {
        name: t("menu.veganMenuDisplay.title"),
        description: t("menu.setMenus.veganEastWest.description"),
        price: t("menu.veganMenuDisplay.pricePerPerson"),
        spicy: false,
        vegetarian: true,
        isVeganMenuDisplay: true,
        image: "/images/menus/menu-vegan.webp",
        id: "vegan-menu-east-west",
      },
      {
        name: t("menu.lazeezMenuDisplay.title"),
        description: t("menu.setMenus.lazeezVegan.description"),
        price: t("menu.lazeezMenuDisplay.pricePerPerson"),
        spicy: false,
        vegetarian: true,
        isVeganMenuDisplay: true,
        image: "/images/menus/menu-lazeez.webp",
        id: "menu-lazeez-vegan",
      },
      {
        name: t("menu.sahtenMenuDisplay.title"),
        description: t("menu.setMenus.sahten.description"),
        price: t("menu.sahtenMenuDisplay.pricePerPerson"),
        spicy: false,
        vegetarian: false,
        isMenuDisplay: true,
        image: "/images/menus/menu-sahten.webp",
        id: "menu-sahten",
      },
    ],
    coldMezzes: [
      {
        name: t("menu.coldMezzes.taratorChicken.title"),
        description: t("menu.coldMezzes.taratorChicken.description"),
        price: t("menu.coldMezzes.taratorChicken.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/cold-mezzes/poulet-torator.webp",
      },
      {
        name: t("menu.coldMezzes.muhammara.title"),
        description: t("menu.coldMezzes.muhammara.description"),
        price: t("menu.coldMezzes.muhammara.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/muhamara.webp",
      },
      {
        name: t("menu.coldMezzes.makdous.title"),
        description: t("menu.coldMezzes.makdous.description"),
        price: t("menu.coldMezzes.makdous.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/makdous.webp",
      },
      {
        name: t("menu.coldMezzes.itch.title"),
        description: t("menu.coldMezzes.itch.description"),
        price: t("menu.coldMezzes.itch.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/iche.webp",
      },
      {
        name: t("menu.coldMezzes.hummus.title"),
        description: t("menu.coldMezzes.hummus.description"),
        price: t("menu.coldMezzes.hummus.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/houmos.webp",
      },
      {
        name: t("menu.coldMezzes.moutabal.title"),
        description: t("menu.coldMezzes.moutabal.description"),
        price: t("menu.coldMezzes.moutabal.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/moutabal.webp",
      },
      {
        name: t("menu.coldMezzes.warakEnab.title"),
        description: t("menu.coldMezzes.warakEnab.description"),
        price: t("menu.coldMezzes.warakEnab.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/warak-enab.webp",
      },
      {
        name: t("menu.coldMezzes.moussaka.title"),
        description: t("menu.coldMezzes.moussaka.description"),
        price: t("menu.coldMezzes.moussaka.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/mousaka.webp",
      },
      {
        name: t("menu.coldMezzes.zahra.title"),
        description: t("menu.coldMezzes.zahra.description"),
        price: t("menu.coldMezzes.zahra.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/cold-mezzes/zahra.webp",
      },
    ],
    hotMezzes: [
      {
        name: t("menu.hotMezzes.foulMoudamas.title"),
        description: t("menu.hotMezzes.foulMoudamas.description"),
        price: t("menu.hotMezzes.foulMoudamas.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/hot-mezzes/foul-moudamas.webp",
      },
      {
        name: t("menu.hotMezzes.arayesCheese.title"),
        description: t("menu.hotMezzes.arayesCheese.description"),
        price: t("menu.hotMezzes.arayesCheese.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/arayes-cheese.webp",
      },
      {
        name: t("menu.hotMezzes.sujuk.title"),
        description: t("menu.hotMezzes.sujuk.description"),
        price: t("menu.hotMezzes.sujuk.price"),
        spicy: true,
        vegetarian: false,
        image: "/images/hot-mezzes/sujuk.webp",
      },
      {
        name: t("menu.hotMezzes.kibbeh2pcs.title"),
        description: t("menu.hotMezzes.kibbeh2pcs.description"),
        price: t("menu.hotMezzes.kibbeh2pcs.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/kebbe.webp",
      },

      {
        name: t("menu.hotMezzes.batataHarra.title"),
        description: t("menu.hotMezzes.batataHarra.description"),
        price: t("menu.hotMezzes.batataHarra.price"),
        spicy: true,
        vegetarian: false,
        image: "/images/hot-mezzes/batata-harra.webp",
      },
      {
        name: t("menu.hotMezzes.rkakat.title"),
        description: t("menu.hotMezzes.rkakat.description"),
        price: t("menu.hotMezzes.rkakat.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/rkakat.webp",
      },
      {
        name: t("menu.hotMezzes.falafelVegan.title"),
        description: t("menu.hotMezzes.falafelVegan.description"),
        price: t("menu.hotMezzes.falafelVegan.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/hot-mezzes/falafel-salad.webp",
      },
      {
        name: t("menu.hotMezzes.kibbehVeganist.title"),
        description: t("menu.hotMezzes.kibbehVeganist.description"),
        price: t("menu.hotMezzes.kibbehVeganist.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/hot-mezzes/kebbe-vegan.webp",
      },
      {
        name: t("menu.hotMezzes.grilledSyrianCheese.title"),
        description: t("menu.hotMezzes.grilledSyrianCheese.description"),
        price: t("menu.hotMezzes.grilledSyrianCheese.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/grilled-cheese.webp",
      },
      {
        name: t("menu.hotMezzes.nakanek.title"),
        description: t("menu.hotMezzes.nakanek.description"),
        price: t("menu.hotMezzes.nakanek.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/nakanek.webp",
      },
      {
        name: t("menu.hotMezzes.toshka.title"),
        description: t("menu.hotMezzes.toshka.description"),
        price: t("menu.hotMezzes.toshka.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/sujuk.webp",
      },
      {
        name: t("menu.hotMezzes.orientalEggplant.title"),
        description: t("menu.hotMezzes.orientalEggplant.description"),
        price: t("menu.hotMezzes.orientalEggplant.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/oriental-eggplant.webp",
      },
      {
        name: t("menu.hotMezzes.chickenLiver.title"),
        description: t("menu.hotMezzes.chickenLiver.description"),
        price: t("menu.hotMezzes.chickenLiver.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/hot-mezzes/chicken-liver.webp",
      },
      {
        name: t("menu.hotMezzes.fatteh.title"),
        description: t("menu.hotMezzes.fatteh.description"),
        price: t("menu.hotMezzes.fatteh.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/hot-mezzes/fatteh.webp",
      },
    ],
    salads: [
      {
        name: t("menu.salads.originalTabouleh.title"),
        description: t("menu.salads.originalTabouleh.description"),
        price: t("menu.salads.originalTabouleh.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/Salads/taboule.webp",
      },
      {
        name: t("menu.salads.fattoush.title"),
        description: t("menu.salads.fattoush.description"),
        price: t("menu.salads.fattoush.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/Salads/fattoush.webp",
      },
      {
        name: t("menu.salads.falafel.title"),
        description: t("menu.salads.falafel.description"),
        price: t("menu.salads.falafel.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/Salads/falafel.webp",
      },
    ],
    lunchDishes: [
      {
        name: t("menu.lunchDishes.vegan.title"),
        description: t("menu.lunchDishes.vegan.description"),
        price: t("menu.lunchDishes.vegan.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/lunch-dishes/plat-vegan.webp",
      },
      {
        name: t("menu.lunchDishes.aleppoMix.title"),
        description: t("menu.lunchDishes.aleppoMix.description"),
        price: t("menu.lunchDishes.aleppoMix.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/alepo-mix.webp",
      },
      {
        name: t("menu.lunchDishes.sujuk.title"),
        description: t("menu.lunchDishes.sujuk.description"),
        price: t("menu.lunchDishes.sujuk.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/toshka-leban.webp",
      },
      {
        name: t("menu.lunchDishes.falafel.title"),
        description: t("menu.lunchDishes.falafel.description"),
        price: t("menu.lunchDishes.falafel.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/lunch-dishes/falafel.webp",
      },
      {
        name: t("menu.lunchDishes.toshka.title"),
        description: t("menu.lunchDishes.toshka.description"),
        price: t("menu.lunchDishes.toshka.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/toshka-leban.webp",
      },
      {
        name: t("menu.lunchDishes.kebab.title"),
        description: t("menu.lunchDishes.kebab.description"),
        price: t("menu.lunchDishes.kebab.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/kebab-dish.webp",
      },
      {
        name: t("menu.lunchDishes.chichTaouk.title"),
        description: t("menu.lunchDishes.chichTaouk.description"),
        price: t("menu.lunchDishes.chichTaouk.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/shish-taouk.webp",
      },
      {
        name: t("menu.lunchDishes.grillMix.title"),
        description: t("menu.lunchDishes.grillMix.description"),
        price: t("menu.lunchDishes.grillMix.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/lunch-dishes/kebab-dish.webp",
      },
    ],
    sandwiches: [
      {
        name: t("menu.sandwiches.hummus.title"),
        description: t("menu.sandwiches.hummus.description"),
        price: t("menu.sandwiches.hummus.price"),
        spicy: false,
        vegetarian: true,
      },
      {
        name: t("menu.sandwiches.chichTaouk.title"),
        description: t("menu.sandwiches.chichTaouk.description"),
        price: t("menu.sandwiches.chichTaouk.price"),
        spicy: false,
        vegetarian: false,
      },
      {
        name: t("menu.sandwiches.moutabal.title"),
        description: t("menu.sandwiches.moutabal.description"),
        price: t("menu.sandwiches.moutabal.price"),
        spicy: false,
        vegetarian: true,
      },
      {
        name: t("menu.sandwiches.toshka.title"),
        description: t("menu.sandwiches.toshka.description"),
        price: t("menu.sandwiches.toshka.price"),
        spicy: false,
        vegetarian: false,
      },
      {
        name: t("menu.sandwiches.falafel.title"),
        description: t("menu.sandwiches.falafel.description"),
        price: t("menu.sandwiches.falafel.price"),
        spicy: false,
        vegetarian: true,
      },
      {
        name: t("menu.sandwiches.kebab.title"),
        description: t("menu.sandwiches.kebab.description"),
        price: t("menu.sandwiches.kebab.price"),
        spicy: false,
        vegetarian: false,
      },
      {
        name: t("menu.sandwiches.veganGrill.title"),
        description: t("menu.sandwiches.veganGrill.description"),
        price: t("menu.sandwiches.veganGrill.price"),
        spicy: false,
        vegetarian: true,
      },
      {
        name: t("menu.sandwiches.makdous.title"),
        description: t("menu.sandwiches.makdous.description"),
        price: t("menu.sandwiches.makdous.price"),
        spicy: false,
        vegetarian: true,
      },
      {
        name: t("menu.sandwiches.toratorChicken.title"),
        description: t("menu.sandwiches.toratorChicken.description"),
        price: t("menu.sandwiches.toratorChicken.price"),
        spicy: false,
        vegetarian: false,
      },
      {
        name: t("menu.sandwiches.cheese.title"),
        description: t("menu.sandwiches.cheese.description"),
        price: t("menu.sandwiches.cheese.price"),
        spicy: false,
        vegetarian: true,
      },
    ],
    skewers: [
      {
        name: t("menu.skewers.kebab.title"),
        description: t("menu.skewers.kebab.description"),
        price: t("menu.skewers.kebab.price"),
        spicy: false,
        vegetarian: false,
      },
      {
        name: t("menu.skewers.chichTaouk.title"),
        description: t("menu.skewers.chichTaouk.description"),
        price: t("menu.skewers.chichTaouk.price"),
        spicy: false,
        vegetarian: false,
      },
    ],
    desserts: [
      {
        name: t("menu.desserts.aishElSaraya.title"),
        description: t("menu.desserts.aishElSaraya.description"),
        price: t("menu.desserts.aishElSaraya.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/desserts/aish-el-saraya.webp",
      },
      {
        name: t("menu.desserts.traditionalIceCream.title"),
        description: t("menu.desserts.traditionalIceCream.description"),
        price: t("menu.desserts.traditionalIceCream.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/desserts/traditional-ice-cream.webp",
      },
      {
        name: t("menu.desserts.halw.title"),
        description: t("menu.desserts.halw.description"),
        price: t("menu.desserts.halw.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/desserts/halw.webp",
      },
      {
        name: t("menu.desserts.assortmentArabicSweets.title"),
        description: t("menu.desserts.assortmentArabicSweets.description"),
        price: t("menu.desserts.assortmentArabicSweets.price"),
        spicy: false,
        vegetarian: true,
        image: "/images/desserts/baklawa.webp",
      },
    ],
    drinks: [
      {
        name: t("menu.drinks.lebaneseBeer.title"),
        description: t("menu.drinks.lebaneseBeer.description"),
        price: t("menu.drinks.lebaneseBeer.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/lebanese-beer.webp",
        section: "Beers",
      },
      {
        name: t("menu.drinks.hoegaardenBeer.title"),
        description: t("menu.drinks.hoegaardenBeer.description"),
        price: t("menu.drinks.hoegaardenBeer.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/hoegaarden-white-beer.webp",
        section: "Beers",
      },
      {
        name: t("menu.drinks.jupilerBeer.title"),
        description: t("menu.drinks.jupilerBeer.description"),
        price: t("menu.drinks.jupilerBeer.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/jupiler-beer.webp",
        section: "Beers",
      },
      {
        name: t("menu.drinks.leffeLindemans.title"),
        description: t("menu.drinks.leffeLindemans.description"),
        price: t("menu.drinks.leffeLindemans.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/leffe brown beer lindemans kriek.webp",
        section: "Beers",
      },
      {
        name: t("menu.drinks.chateauKsaraRed.title"),
        description: t("menu.drinks.chateauKsaraRed.description"),
        price: t("menu.drinks.chateauKsaraRed.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-kefraya-red-wine.webp",
        section: "Red Wines",
      },
      {
        name: t("menu.drinks.chateauKsaraReserve.title"),
        description: t("menu.drinks.chateauKsaraReserve.description"),
        price: t("menu.drinks.chateauKsaraReserve.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "Red Wines",
      },
      {
        name: t("menu.drinks.chateauKefrayaRed.title"),
        description: t("menu.drinks.chateauKefrayaRed.description"),
        price: t("menu.drinks.chateauKefrayaRed.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "Red Wines",
      },
      {
        name: t("menu.drinks.chateauKsaraWhite.title"),
        description: t("menu.drinks.chateauKsaraWhite.description"),
        price: t("menu.drinks.chateauKsaraWhite.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "White Wines",
      },
      {
        name: t("menu.drinks.chateauKsaraBlanc.title"),
        description: t("menu.drinks.chateauKsaraBlanc.description"),
        price: t("menu.drinks.chateauKsaraBlanc.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "White Wines",
      },
      {
        name: t("menu.drinks.chateauKefrayaWhite.title"),
        description: t("menu.drinks.chateauKefrayaWhite.description"),
        price: t("menu.drinks.chateauKefrayaWhite.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "White Wines",
      },
      {
        name: t("menu.drinks.chateauKsaraRose.title"),
        description: t("menu.drinks.chateauKsaraRose.description"),
        price: t("menu.drinks.chateauKsaraRose.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/chateau-ksara-rosé.webp",
        section: "Rosé Wines",
      },
      {
        name: t("menu.drinks.roseDamascusJuice.title"),
        description: t("menu.drinks.roseDamascusJuice.description"),
        price: t("menu.drinks.roseDamascusJuice.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/schweppes-agrumes-virgin-mojito.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.cocaCola.title"),
        description: t("menu.drinks.cocaCola.description"),
        price: t("menu.drinks.cocaCola.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/coca-cola -cola-zero -sprite.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.schweppesAgrumes.title"),
        description: t("menu.drinks.schweppesAgrumes.description"),
        price: t("menu.drinks.schweppesAgrumes.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/schweppes-agrumes-virgin-mojito.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.ayran.title"),
        description: t("menu.drinks.ayran.description"),
        price: t("menu.drinks.ayran.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/ayran.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.waterSpa.title"),
        description: t("menu.drinks.waterSpa.description"),
        price: t("menu.drinks.waterSpa.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/water-spa.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.fantaIceTea.title"),
        description: t("menu.drinks.fantaIceTea.description"),
        price: t("menu.drinks.fantaIceTea.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/fanta-ice-tea.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.schweppesTonic.title"),
        description: t("menu.drinks.schweppesTonic.description"),
        price: t("menu.drinks.schweppesTonic.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/indian-tonic.webp",
        section: "Soft Drinks",
      },
      {
        name: t("menu.drinks.arabianCoffee.title"),
        description: t("menu.drinks.arabianCoffee.description"),
        price: t("menu.drinks.arabianCoffee.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/arabian-coffee.webp",
        section: "Hot Drinks",
      },
      {
        name: t("menu.drinks.cafeEspresso.title"),
        description: t("menu.drinks.cafeEspresso.description"),
        price: t("menu.drinks.cafeEspresso.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/espresso.webp",
        section: "Hot Drinks",
      },
      {
        name: t("menu.drinks.tea.title"),
        description: t("menu.drinks.tea.description"),
        price: t("menu.drinks.tea.price"),
        spicy: false,
        vegetarian: false,
        image: "/images/drinks/the-camomille.webp",
        section: "Hot Drinks",
      },
    ],
  };

  return (
    <div
      className={`min-h-screen pt-16 transition-colors duration-300 ${theme === "dark"
        ? "bg-[#1A1A1A] text-white"
        : "bg-[#F5F0E6] text-[#1A1A1A]"
        }`}
    >
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
              }`}
          >
            {t("menu.title")}
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-[#E6E6E6]" : "text-[#1A1A1A]"
              }`}
          >
            {t("menu.subtitle")}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Desktop/Tablet Layout */}
          <div className="hidden sm:flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${activeCategory === category.id
                  ? theme === "dark"
                    ? "bg-white text-[#1A1A1A] shadow-lg shadow-white/30 border-2 border-white/50"
                    : "bg-[#A8D5BA] text-white shadow-lg shadow-[#A8D5BA]/30 border-2 border-[#A8D5BA]/50"
                  : theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20 border-2 border-white/20 hover:border-white/40 shadow-md"
                    : "bg-white/90 text-[#1A1A1A] hover:bg-white border-2 border-[#A8D5BA]/40 hover:border-[#A8D5BA]/70 shadow-md"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile Layout - Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-4 px-2 -mx-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as Category)}
                  className={`flex-shrink-0 px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-sm whitespace-nowrap min-w-max ${activeCategory === category.id
                    ? theme === "dark"
                      ? "bg-white text-[#1A1A1A] shadow-xl shadow-white/40 border-2 border-white/60"
                      : "bg-[#A8D5BA] text-white shadow-xl shadow-[#A8D5BA]/40 border-2 border-[#A8D5BA]/60"
                    : theme === "dark"
                      ? "bg-white/10 text-white border-2 border-white/30 shadow-lg"
                      : "bg-white text-[#1A1A1A] border-2 border-[#A8D5BA]/50 shadow-lg"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center mt-2">
              <div
                className={`h-1 w-16 rounded-full ${theme === "dark" ? "bg-white/30" : "bg-[#A8D5BA]/40"
                  }`}
              >
                <div
                  className={`h-full w-4 rounded-full transition-transform duration-300 ${theme === "dark" ? "bg-white" : "bg-[#A8D5BA]"
                    }`}
                  style={{
                    transform: `translateX(${categories.findIndex((cat) => cat.id === activeCategory) *
                      12
                      }px)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {activeCategory === "setMenus" ||
            activeCategory === "coldMezzes" ||
            activeCategory === "hotMezzes" ||
            activeCategory === "salads" ||
            activeCategory === "lunchDishes" ||
            activeCategory === "sandwiches" ||
            activeCategory === "skewers" ||
            activeCategory === "desserts" ||
            activeCategory === "drinks" ? (
            <div>
              {/* Fresh & Delicious title for Cold Mezzes section */}
              {activeCategory === "coldMezzes" && (
                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg sm:rounded-xl inline-block animate-bounce ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 border-white/60 shadow-xl sm:shadow-2xl shadow-white/50"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/40"
                      }`}
                  >
                    🥗 Fresh & Delicious 🥗
                  </h2>
                </div>
              )}

              {/* Hot & Spicy title for Hot Mezzes section */}
              {activeCategory === "hotMezzes" && (
                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg sm:rounded-xl inline-block animate-pulse ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 border-white/60 shadow-xl sm:shadow-2xl shadow-white/50"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/40"
                      }`}
                  >
                    🌶️ Hot & Spicy 🌶️
                  </h2>
                </div>
              )}

              {/* Garden Fresh title for Salads section */}
              {activeCategory === "salads" && (
                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg sm:rounded-xl inline-block animate-bounce ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 border-white/60 shadow-xl sm:shadow-2xl shadow-white/50"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/40"
                      }`}
                  >
                    🥬 Garden Fresh
                  </h2>
                </div>
              )}

              {/* Hearty & Satisfying title for Lunch Dishes section */}
              {activeCategory === "lunchDishes" && (
                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg sm:rounded-xl inline-block animate-pulse ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 border-white/60 shadow-xl sm:shadow-2xl shadow-white/50"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/40"
                      }`}
                  >
                    🍽️ Hearty & Satisfying 🍽️
                  </h2>
                </div>
              )}

              {/* Take Away Only title for Sandwiches section */}
              {activeCategory === "sandwiches" && (
                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg sm:rounded-xl inline-block animate-bounce ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 border-white/60 shadow-xl sm:shadow-2xl shadow-white/50"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/40"
                      }`}
                  >
                    <span className="block sm:inline">
                      🥪 {t("menu.sandwiches.takeAwayOnly")} 🥪
                    </span>
                  </h2>
                </div>
              )}

              {/* Grilled to Perfection title for Skewers section */}
              {activeCategory === "skewers" && (
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-xl sm:rounded-2xl inline-block animate-bounce ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 md:border-3 border-white/80 shadow-2xl md:shadow-3xl shadow-white/70"
                      : "bg-gradient-to-r from-[#F5F0E6] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 md:border-3 border-[#A8D5BA] shadow-2xl md:shadow-3xl shadow-[#A8D5BA]/80"
                      }`}
                  >
                    <span className="block sm:inline">
                      🔥 Authentic Grilled Skewers 🔥
                    </span>
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-3 sm:mt-4 font-medium px-4 ${theme === "dark" ? "text-[#E6E6E6]" : "text-[#1A1A1A]"
                      }`}
                  >
                    Perfectly marinated and grilled over open flames
                  </p>
                </div>
              )}

              {/* Sweet Delights title for Desserts section */}
              {activeCategory === "desserts" && (
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-black px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-xl sm:rounded-2xl inline-block animate-pulse ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 md:border-3 border-white/80 shadow-2xl md:shadow-3xl shadow-white/70"
                      : "bg-gradient-to-r from-[#F5F0E6] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 md:border-3 border-[#A8D5BA] shadow-2xl md:shadow-3xl shadow-[#A8D5BA]/80"
                      }`}
                  >
                    🍰 Sweet Delights 🍰
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-3 sm:mt-4 font-medium px-4 ${theme === "dark" ? "text-[#E6E6E6]" : "text-[#1A1A1A]"
                      }`}
                  >
                    Indulgent traditional desserts crafted with authentic
                    flavors
                  </p>
                </div>
              )}

              {/* Refreshing Beverages title for Drinks section */}
              {activeCategory === "drinks" && (
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-black px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-xl sm:rounded-2xl inline-block animate-pulse ${theme === "dark"
                      ? "bg-gradient-to-r from-white/20 to-white/40 text-white border-2 md:border-3 border-white/80 shadow-2xl md:shadow-3xl shadow-white/70"
                      : "bg-gradient-to-r from-[#F5F0E6] to-[#A8D5BA]/60 text-[#1A1A1A] border-2 md:border-3 border-[#A8D5BA] shadow-2xl md:shadow-3xl shadow-[#A8D5BA]/80"
                      }`}
                  >
                    {t('menu.drinks.refreshingBeverages.title')}
                  </h2>
                  <p
                    className={`text-base sm:text-lg mt-3 sm:mt-4 font-medium px-4 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                      }`}
                  >
                    {t('menu.drinks.refreshingBeverages.subtitle')}
                  </p>
                </div>
              )}

              {/* Special layout for drinks category */}
              {activeCategory === "drinks" ? (
                <div>
                  {/* Beers Section */}
                  <div className="text-center mb-5 font-semibold text-2xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.beers.title')}</p>
                  </div>
                  <div className="flex flex-col mb-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/lebanese-beer.webp",
                                t('menu.drinks.lebaneseBeer.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/lebanese-beer.webp"
                                alt={t('menu.drinks.lebaneseBeer.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.lebaneseBeer.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.lebaneseBeer.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.lebaneseBeer.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/hoegaarden-white-beer.webp",
                                t('menu.drinks.hoegaardenBeer.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/hoegaarden-white-beer.webp"
                                alt={t('menu.drinks.hoegaardenBeer.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.hoegaardenBeer.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.hoegaardenBeer.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.hoegaardenBeer.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mb-5 pb-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/jupiler-beer.webp",
                                t('menu.drinks.jupilerBeer.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/jupiler-beer.webp"
                                alt={t('menu.drinks.jupilerBeer.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.jupilerBeer.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.jupilerBeer.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.jupilerBeer.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/leffe brown beer lindemans kriek.webp",
                                t('menu.drinks.leffeLindemans.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/leffe brown beer lindemans kriek.webp"
                                alt={t('menu.drinks.leffeLindemans.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.leffeLindemans.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.leffeLindemans.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.leffeLindemans.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wines Section */}
                  <div className="text-center mb-5 font-semibold text-2xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.wines.title')}</p>
                  </div>

                  {/* Red Wines */}
                  <div className="text-center mb-5 font-semibold text-xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.redWine.title')}</p>
                  </div>
                  <div className="flex flex-col mb-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/chateau-ksara-red.webp",
                                t('menu.drinks.chateauKsaraRed.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/chateau-ksara-red.webp"
                                alt={t('menu.drinks.chateauKsaraRed.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.chateauKsaraRed.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.chateauKsaraRed.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.chateauKsaraRed.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/chateau-ksara-red.webp",
                                t('menu.drinks.chateauKsaraReserve.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/chateau-ksara-red.webp"
                                alt={t('menu.drinks.chateauKsaraReserve.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.chateauKsaraReserve.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.chateauKsaraReserve.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.chateauKsaraReserve.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col min-h-[100px] p-5">
                    <section className="flex flex-col min-h-[100px] p-5 max-w-[1200px] mx-auto">
                      <div
                        className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col relative ${theme === "dark"
                          ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                          : "bg-white"
                          }`}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                            onClick={() => openLightbox(
                              "/images/drinks/chateau-kefraya-red.webp",
                              "Chateau Kefraya"
                            )}
                          >
                            <Image
                              src="/images/drinks/chateau-kefraya-red.webp"
                              alt="Chateau Kefraya"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                } `}>
                                <svg
                                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3
                          className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                            }`}
                        >
                          Chateau Kefraya
                        </h3>
                        <div
                          className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                            }`}
                        >
                          Bretéche bottle
                        </div>
                        <div className="flex justify-center mt-auto pt-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold ${theme === "dark"
                              ? "bg-white text-[#1A1A1A]"
                              : "bg-[#252927] text-white"
                              }`}
                          >
                            36€
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* White Wine Section */}
                  <div className="relative mt-5 h-auto text-center text-2xl font-semibold">
                    <h4 className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.whiteWine.title')}</h4>
                    <p>
                      <br />
                    </p>
                  </div>
                  <div className="flex flex-col relative mt-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/chateau-kefraya-white.webp",
                                "Chateau Ksara - Blanc de Blanc bottle"
                              )}
                            >
                              <Image
                                src="/images/drinks/chateau-kefraya-white.webp"
                                alt="Chateau Ksara - Blanc de Blanc bottle"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            Chateau Ksara
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            <p>Blanc de Blanc bottle</p>
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              36€
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/chateau-ksara-white.webp",
                                "Chateau Ksara - Blanc de l'observatoire glass | bottle"
                              )}
                            >
                              <Image
                                src="/images/drinks/chateau-ksara-white.webp"
                                alt="Chateau Ksara - Blanc de l'observatoire glass | bottle"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            Chateau Ksara
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            <p>Blanc de l&apos;observatoire glass| bottle</p>
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              6€ | 29€
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Chateau Kefraya*/}

                  <div className="flex flex-col min-h-[100px] p-5">
                    <section className="flex flex-col min-h-[100px] p-5 max-w-[1200px] mx-auto">
                      <div
                        className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center relative 
        ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10 text-white" : "bg-white text-[#1A1A1A]"}`}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                            onClick={() => openLightbox(
                              "/images/drinks/chateau-kefraya-white.webp",
                              "Chateau Kefraya - Blanc de l'observatoire glass | bottle"
                            )}
                          >
                            <Image
                              src="/images/drinks/chateau-kefraya-white.webp"
                              alt="Chateau Kefraya - Blanc de l'observatoire glass | bottle"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                } `}>
                                <svg
                                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Chateau Kefraya</h3>
                        <div className="text-sm mb-4 leading-relaxed flex-grow">
                          <p>Blanc de l&apos;observatoire glass | bottle</p>
                        </div>
                        <div className="flex justify-center mt-auto pt-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold 
            ${theme === "dark" ? "bg-white text-[#1A1A1A]" : "bg-[#252927] text-white"}`}
                          >
                            36€
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>


                  {/* Wine Rose Section */}
                  <div className="relative mt-5 h-auto text-center font-semibold text-2xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.roseWine.title')}</p>
                  </div>
                  <div className="flex flex-col min-h-[100px] p-5">
                    <section className="flex flex-col min-h-[100px] p-5 max-w-[1200px] mx-auto">
                      <div
                        className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center relative 
        ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10 text-white" : "bg-white text-[#1A1A1A]"}`}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                                                          onClick={() => openLightbox(
                                "/images/drinks/chateau-ksara-rosé.webp",
                                t('menu.drinks.chateauKsaraRose.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/chateau-ksara-rosé.webp"
                                alt={t('menu.drinks.chateauKsaraRose.title')}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                } `}>
                                <svg
                                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>
                          {t('menu.drinks.chateauKsaraRose.title')}
                        </h3>
                        <div className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>
                          <p>{t('menu.drinks.chateauKsaraRose.description')}</p>
                        </div>
                        <div className="flex justify-center mt-auto pt-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold 
            ${theme === "dark" ? "bg-white text-[#1A1A1A]" : "bg-[#252927] text-white"}`}
                          >
                            {t('menu.drinks.chateauKsaraRose.price')}
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* ----------------------------------------------------------------------Soft Drinks---------------------------------------------------------------------- */}
                  {/* Soft Drinks Section */}
                  <div className="relative mt-5 h-auto text-center font-semibold text-2xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.softDrinks.title')}</p>
                  </div>
                  <div className="flex flex-col relative mt-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/rose-damascus.webp",
                                t('menu.drinks.roseDamascusJuice.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/rose-damascus.webp"
                                alt={t('menu.drinks.roseDamascusJuice.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.roseDamascusJuice.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.roseDamascusJuice.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.roseDamascusJuice.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/coca-cola -cola-zero -sprite.webp",
                                t('menu.drinks.cocaCola.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/coca-cola -cola-zero -sprite.webp"
                                alt={t('menu.drinks.cocaCola.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.cocaCola.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.cocaCola.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.cocaCola.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col relative mt-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/schweppes-agrumes-virgin-mojito.webp",
                                t('menu.drinks.schweppesAgrumes.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/schweppes-agrumes-virgin-mojito.webp"
                                alt={t('menu.drinks.schweppesAgrumes.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.schweppesAgrumes.title')}
                          </h3>
                          <div className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>
                            {t('menu.drinks.schweppesAgrumes.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.schweppesAgrumes.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/ayran.webp",
                                t('menu.drinks.ayran.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/ayran.webp"
                                alt={t('menu.drinks.ayran.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.ayran.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.ayran.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.ayran.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col relative mt-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/water-spa.webp",
                                t('menu.drinks.waterSpa.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/water-spa.webp"
                                alt={t('menu.drinks.waterSpa.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.waterSpa.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.waterSpa.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.waterSpa.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/fanta orange-ice-tea.webp",
                                t('menu.drinks.fantaIceTea.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/fanta orange-ice-tea.webp"
                                alt={t('menu.drinks.fantaIceTea.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.fantaIceTea.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.fantaIceTea.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {t('menu.drinks.fantaIceTea.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col min-h-[100px] p-5">
                    <section className="flex flex-col min-h-[100px] p-5 max-w-[1200px] mx-auto">
                      <div
                        className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                          }`}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                                                          onClick={() => openLightbox(
                                "/images/drinks/indian-tonic.webp",
                                t('menu.drinks.schweppesTonic.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/indian-tonic.webp"
                                alt={t('menu.drinks.schweppesTonic.title')}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                } `}>
                                <svg
                                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3
                          className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                            }`}
                        >
                          {t('menu.drinks.schweppesTonic.title')}
                        </h3>
                        <div className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>
                          {t('menu.drinks.schweppesTonic.description')}
                        </div>
                        <div className="flex justify-center mt-auto pt-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                              ? "bg-white text-[#1A1A1A]"
                              : "bg-[#252927] text-white"
                              }`}
                          >
                            {t('menu.drinks.schweppesTonic.price')}
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                 {/* ----------------------------------------------------------------------Hot Drinks---------------------------------------------------------------------- */}

                  {/* Hot Drinks Section */}
                  <div className="relative mt-5 h-auto text-center font-semibold text-2xl">
                    <p className={`${theme === "dark" ? "text-white" : "text-[#1A1A1A]"}`}>{t('menu.drinks.hotDrinks.title')}</p>
                  </div>

                  <div className="flex flex-col relative mt-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/arabian-coffee.webp",
                                t('menu.drinks.arabianCoffee.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/arabian-coffee.webp"
                                alt={t('menu.drinks.arabianCoffee.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                            }`}>
                            {t('menu.drinks.arabianCoffee.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.arabianCoffee.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === 'dark' ? 'bg-white text-[#1A1A1A]' : 'bg-[#252927] text-white'
                              }`}>
                              {t('menu.drinks.arabianCoffee.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[50%] ml-5 max-md:ml-0 max-md:w-full">
                        <div
                          className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                            }`}
                        >
                          <div className="flex justify-center mb-4">
                            <div
                              className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                              onClick={() => openLightbox(
                                "/images/drinks/espresso.webp",
                                t('menu.drinks.cafeEspresso.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/espresso.webp"
                                alt={t('menu.drinks.cafeEspresso.title')}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                  } `}>
                                  <svg
                                    className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                            }`}>
                            {t('menu.drinks.cafeEspresso.title')}
                          </h3>
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {t('menu.drinks.cafeEspresso.description')}
                          </div>
                          <div className="flex justify-center mt-auto pt-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === 'dark' ? 'bg-white text-[#1A1A1A]' : 'bg-[#252927] text-white'
                              }`}>
                              {t('menu.drinks.cafeEspresso.price')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col min-h-[100px] p-5">
                    <section className="flex flex-col min-h-[100px] p-5 max-w-[1200px] mx-auto">
                      <div
                        className={`flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 text-center h-full ${theme === "dark" ? "bg-[#1A1A1A] shadow-white/10" : "bg-white"
                          }`}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                                                          onClick={() => openLightbox(
                                "/images/drinks/the-camomille.webp",
                                t('menu.drinks.tea.title')
                              )}
                            >
                              <Image
                                src="/images/drinks/the-camomille.webp"
                                alt={t('menu.drinks.tea.title')}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-white/90' : 'bg-black/80'
                                } `}>
                                <svg
                                  className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                          }`}>
                          {t('menu.drinks.tea.title')}
                        </h3>
                        <div
                          className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                            }`}
                        >
                          {t('menu.drinks.tea.description')}
                        </div>
                        <div className="flex justify-center mt-auto pt-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === 'dark' ? 'bg-white text-[#1A1A1A]' : 'bg-[#252927] text-white'
                            }`}>
                            {t('menu.drinks.tea.price')}
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              ) : (
                //----------------------------------------------------------------------End of Hot Drinks----------------------------------------------------------------------

                // Universal card layout for all other categories
                <div
                  className={`gap-6 relative ${
                    // Special layouts for categories with last-2-items-span-full-width requirement
                    activeCategory === "coldMezzes" ||
                      activeCategory === "hotMezzes" ||
                      activeCategory === "lunchDishes"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6" // Use 6-column grid for flexible spanning
                      : activeCategory === "skewers"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" // Skewers: 2 items side by side
                        : activeCategory === "desserts"
                          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" // Desserts: 2 columns, 2 rows
                          : activeCategory === "setMenus"
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" // Set Menus: 2 columns, 2 rows
                            : activeCategory === "sandwiches"
                              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Sandwiches: default with last item full width
                              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Default: 3 columns
                    } ${theme === "dark" ? "shadow-2xl shadow-white/10" : ""}`}
                >
                  {/* Enhanced background for each section */}
                  <div
                    className={`absolute inset-0 -m-8 rounded-2xl ${activeCategory === "coldMezzes"
                      ? theme === "dark"
                        ? "bg-gradient-to-br from-[#F5F0E6]/60 to-[#A8D5BA]/20"
                        : "bg-gradient-to-br from-[#FFFFFF]/90 to-[#A8D5BA]/30"
                      : activeCategory === "hotMezzes"
                        ? theme === "dark"
                          ? "bg-gradient-to-br from-orange-900/30 to-red-900/20"
                          : "bg-gradient-to-br from-orange-50/90 to-red-50/60"
                        : activeCategory === "salads"
                          ? theme === "dark"
                            ? "bg-gradient-to-br from-green-900/30 to-lime-900/20"
                            : "bg-gradient-to-br from-green-50/90 to-lime-50/60"
                          : activeCategory === "lunchDishes"
                            ? theme === "dark"
                              ? "bg-gradient-to-br from-blue-900/30 to-indigo-900/20"
                              : "bg-gradient-to-br from-blue-50/90 to-indigo-50/60"
                            : activeCategory === "sandwiches"
                              ? theme === "dark"
                                ? "bg-gradient-to-br from-purple-900/30 to-pink-900/20"
                                : "bg-gradient-to-br from-purple-50/90 to-pink-50/60"
                              : activeCategory === "skewers"
                                ? theme === "dark"
                                  ? "bg-gradient-to-br from-red-900/50 to-orange-900/40"
                                  : "bg-gradient-to-br from-red-50/95 to-orange-50/80"
                                : activeCategory === "desserts"
                                  ? theme === "dark"
                                    ? "bg-gradient-to-br from-pink-900/50 to-purple-900/40"
                                    : "bg-gradient-to-br from-pink-50/95 to-purple-50/80"
                                  : activeCategory === "setMenus"
                                    ? theme === "dark"
                                      ? "bg-gradient-to-br from-[#F5F0E6] to-[#A8D5BA]/60"
                                      : "bg-gradient-to-br from-[#FFFFFF] to-[#A8D5BA]/30"
                                    : theme === "dark"
                                      ? "bg-gradient-to-br from-gray-800/60 to-gray-700/20"
                                      : "bg-gradient-to-br from-gray-50/90 to-gray-100/30"
                      }  -z-10 ${theme === "dark" ? "shadow-xl shadow-white/5" : ""
                      }`}
                  />

                  {menuItems[activeCategory as keyof typeof menuItems] &&
                    menuItems[activeCategory as keyof typeof menuItems].map((item, index) => {
                      const totalItems = menuItems[activeCategory]?.length || 0;
                      const isLastTwo = index >= totalItems - 2;
                      const isLastItem = index === totalItems - 1;

                      // Desktop-specific column spanning logic
                      let columnSpanClass = "";
                      if (
                        activeCategory === "coldMezzes" ||
                        activeCategory === "hotMezzes" ||
                        activeCategory === "lunchDishes"
                      ) {
                        // Using 6-column grid: normal items span 2 columns each (3 items per row)
                        // Last 2 items span 3 columns each (2 items per row, full width evenly)
                        const remainingItems = totalItems % 3;
                        if (remainingItems === 2 && isLastTwo) {
                          // Last 2 items each take 3 columns (half width each)
                          columnSpanClass = "lg:col-span-3";
                        } else if (remainingItems === 1 && isLastItem) {
                          // Single item in last row spans all 6 columns (full width)
                          columnSpanClass = "lg:col-span-6";
                        } else {
                          // Normal items span 2 columns each (3 per row)
                          columnSpanClass = "lg:col-span-2";
                        }
                      } else if (activeCategory === "sandwiches") {
                        // Last item stretches to take full row width
                        columnSpanClass = isLastItem ? "lg:col-span-3" : "";
                      }

                      return (
                        <div
                          key={index}
                          className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center flex flex-col h-full ${theme === "dark"
                            ? "bg-[#1A1A1A] shadow-xl shadow-white/10"
                            : "bg-white"
                            } ${columnSpanClass}`}
                        >
                          {/* Circular Image */}
                          {item.image && (
                            <div className="flex justify-center mb-4">
                              <div
                                className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl"
                                onClick={() =>
                                  openLightbox(item.image!, item.name)
                                }
                              >
                                <Image
                                  src={item.image!}
                                  alt={item.name}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div
                                    className={`p-2 rounded-full ${theme === "dark"
                                      ? "bg-white/90"
                                      : "bg-black/80"
                                      } `}
                                  >
                                    <svg
                                      className={`w-4 h-4 ${theme === "dark"
                                        ? "text-gray-900"
                                        : "text-white"
                                        }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Title */}
                          <h3
                            className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                              }`}
                          >
                            {item.name}
                          </h3>

                          {/* Spicy badge */}
                          {item.spicy && (
                            <div className="flex justify-center mb-3">
                              <span
                                className={`text-xs font-medium px-3 py-1 rounded-full ${theme === "dark"
                                  ? "bg-red-900/50 text-red-200 border border-red-400/40"
                                  : "bg-red-100 text-red-700 border border-red-400"
                                  }`}
                              >
                                🌶️ Spicy
                              </span>
                            </div>
                          )}

                          {/* Vegetarian badge */}
                          {item.vegetarian && (
                            <div className="flex justify-center mb-3">
                              <span
                                className={`text-xs font-medium px-3 py-1 rounded-full ${theme === "dark"
                                  ? "bg-emerald-900/50 text-emerald-200 border border-emerald-400/40"
                                  : "bg-emerald-100 text-emerald-700 border border-emerald-400"
                                  }`}
                              >
                                {(() => {
                                  switch (activeCategory) {
                                    case "setMenus":
                                      return "Vegan";
                                    case "coldMezzes":
                                      return "Vegan";
                                    case "hotMezzes":
                                      return "Vegan";
                                    case "salads":
                                      return "Healthy";
                                    case "lunchDishes":
                                      return "Vegan";
                                    case "sandwiches":
                                      return "Portable";
                                    case "skewers":
                                      return "Grilled";
                                    case "desserts":
                                      return "Sweet";
                                    default:
                                      return "Vegan";
                                  }
                                })()}
                              </span>
                            </div>
                          )}

                          {/* Description - with Read more button for set menus */}
                          <div
                            className={`text-sm mb-4 leading-relaxed flex-grow ${theme === "dark"
                              ? "text-[#E6E6E6]"
                              : "text-[#1A1A1A]"
                              }`}
                          >
                            {activeCategory === "setMenus" && item.id ? (
                              <div className="flex justify-center">
                                <button
                                  onClick={() =>
                                    openSetMenuModal(
                                      item.name,
                                      item.description
                                    )
                                  }
                                  className={`text-sm font-medium transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md px-3 py-2 ${theme === "dark"
                                    ? "text-white hover:text-white focus:ring-white"
                                    : "text-[#A8D5BA] hover:text-[#1A1A1A] focus:ring-[#A8D5BA]"
                                    }`}
                                >
                                  {t("menu.setMenus.readMore")}
                                </button>
                              </div>
                            ) : (
                              <p>{item.description}</p>
                            )}
                          </div>

                          {/* Price Badge */}
                          <div className="flex justify-center mt-auto pt-4">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${theme === "dark"
                                ? "bg-white text-[#1A1A1A]"
                                : "bg-[#252927] text-white"
                                }`}
                            >
                              {item.price}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          ) : (
            // Default layout for other categories
            <div>
              {/* Chef's Special title for Set Menus section */}
              {activeCategory === "setMenus" && (
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-5 rounded-xl sm:rounded-2xl inline-block animate-pulse ${theme === "dark"
                      ? "bg-gradient-to-r from-[#F5F0E6] to-[#A8D5BA] text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/60"
                      : "bg-gradient-to-r from-[#FFFFFF] to-[#A8D5BA]/30 text-[#1A1A1A] border-2 border-[#A8D5BA] shadow-xl sm:shadow-2xl shadow-[#A8D5BA]/30"
                      }`}
                  >
                    <span className="block sm:inline">
                      👨‍🍳 Chef&apos;s Special Menus 👨‍🍳
                    </span>
                  </h2>
                </div>
              )}

              <div
                className={`grid gap-6 sm:gap-8 ${theme === "dark" ? "shadow-2xl shadow-white/10" : ""
                  }`}
              >
                {(menuItems[activeCategory] as MenuItem[])?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-md ${item.isMenuDisplay || item.isVeganMenuDisplay
                        ? "overflow-hidden"
                        : "p-6"
                        } ${activeCategory === "setMenus"
                          ? theme === "dark"
                            ? "bg-[#F5F0E6]/95 hover:bg-[#F5F0E6]/90 border-2 border-[#A8D5BA]/40 shadow-[#A8D5BA]/30 hover:shadow-[#A8D5BA]/50  shadow-xl shadow-white/10"
                            : "bg-[#FFFFFF]/98 hover:bg-[#FFFFFF] border-2 border-[#A8D5BA]/60 shadow-[#A8D5BA]/20 hover:shadow-[#A8D5BA]/40 "
                          : theme === "dark"
                            ? "bg-[#F5F0E6] hover:bg-[#F5F0E6] border border-[#A8D5BA] shadow-[#A8D5BA]/30 shadow-xl shadow-white/10"
                            : "bg-[#FFFFFF] hover:bg-[#A8D5BA] shadow-[#A8D5BA]/50"
                        }`}
                    >
                      {item.isMenuDisplay || item.isVeganMenuDisplay ? (
                        // Special layout for menu display items
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
                          {/* Image */}
                          <div className="relative order-1 lg:order-1">
                            <div
                              className="relative overflow-hidden rounded-lg shadow-xl sm:shadow-2xl cursor-pointer group transition-all duration-300 hover:shadow-3xl"
                              onClick={() =>
                                openLightbox(item.image!, item.name)
                              }
                            >
                              <Image
                                src={item.image!}
                                alt={item.name}
                                width={400}
                                height={500}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                priority
                              />

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div
                                  className={`p-2 sm:p-3 rounded-full ${theme === "dark"
                                    ? "bg-[#A8D5BA]/90"
                                    : "bg-[#A8D5BA]/80"
                                    } `}
                                >
                                  <svg
                                    className={`w-6 h-6 sm:w-8 sm:h-8 ${theme === "dark"
                                      ? "text-[#1A1A1A]"
                                      : "text-[#FFFFFF]"
                                      }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-center order-2 lg:order-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
                              <h3
                                className={`text-xl sm:text-2xl font-bold ${activeCategory === "setMenus"
                                  ? theme === "dark"
                                    ? "text-white"
                                    : "text-[#1A1A1A]"
                                  : theme === "dark"
                                    ? "text-white"
                                    : "text-[#1A1A1A]"
                                  }`}
                              >
                                {item.name}
                              </h3>
                              {item.vegetarian && (
                                <span
                                  className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${activeCategory === "setMenus"
                                    ? theme === "dark"
                                      ? "bg-white/20 text-white border border-white/40"
                                      : "bg-[#A8D5BA]/100 text-white border border-[#A8D5BA]"
                                    : theme === "dark"
                                      ? "text-white"
                                      : "text-[#1A1A1A]"
                                    }`}
                                >
                                  🌱 Vegan
                                </span>
                              )}
                            </div>
                            <div
                              className={`text-base sm:text-lg mb-3 sm:mb-4 italic ${theme === "dark"
                                ? "text-[#E6E6E6]"
                                : "text-[#1A1A1A]"
                                }`}
                            >
                              {activeCategory === "setMenus" && item.id ? (
                                <div className="flex justify-center">
                                  <button
                                    onClick={() =>
                                      openSetMenuModal(
                                        item.name,
                                        item.description
                                      )
                                    }
                                    className={`text-sm sm:text-base font-medium transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md px-3 py-2 ${theme === "dark"
                                      ? "text-white hover:text-white focus:ring-white"
                                      : "text-[#A8D5BA] hover:text-[#1A1A1A] focus:ring-[#A8D5BA]"
                                      }`}
                                  >
                                    {t("menu.setMenus.readMore")}
                                  </button>
                                </div>
                              ) : (
                                <p className="leading-relaxed">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <div className="text-center sm:text-right">
                              <span
                                className={`text-2xl sm:text-3xl font-bold ${theme === "dark"
                                  ? "text-white"
                                  : "text-[#1A1A1A]"
                                  }`}
                              >
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Regular menu item layout
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 p-3 sm:p-0">
                          <div className="flex-1 mb-3 sm:mb-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                              <h3
                                className={`text-lg sm:text-xl font-semibold ${theme === "dark"
                                  ? "text-white"
                                  : "text-[#1A1A1A]"
                                  }`}
                              >
                                {item.name}
                              </h3>
                              <div className="flex gap-1 sm:gap-2">
                                {item.spicy && (
                                  <span className="text-red-400 text-xs sm:text-sm font-medium">
                                    🌶️ Spicy
                                  </span>
                                )}
                                {item.vegetarian && (
                                  <span className="text-orange-400 text-xs sm:text-sm font-medium">
                                    🥬 Veg
                                  </span>
                                )}
                              </div>
                            </div>
                            <p
                              className={`text-sm sm:text-base ${theme === "dark"
                                ? "text-[#E6E6E6]"
                                : "text-[#1A1A1A]"
                                }`}
                            >
                              {item.description}
                            </p>
                          </div>
                          <div className="text-center sm:text-right sm:ml-4">
                            <span
                              className={`text-xl sm:text-2xl font-bold ${theme === "dark"
                                ? "text-white"
                                : "text-[#1A1A1A]"
                                }`}
                            >
                              {item.price}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark"
          ? "bg-[#1A1A1A] border-t border-white/20"
          : "bg-[#ebe8e6]"
          }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${theme === "dark" ? "text-yellow-900" : "text-[#1A1A1A]"
              }`}
          >
            {t('menu.cta.title')}
          </h2>
          <p
            className={`text-lg sm:text-xl mb-6 sm:mb-8 px-4 ${theme === "dark" ? "text-[#E6E6E6]" : "text-[#1A1A1A]"
              }`}
          >
            {t('menu.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/reservations"
              className={`inline-block border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-4 focus:outline-none ${theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-[#1A1A1A] focus:ring-white/30"
                : "border-[#615f5d] text-black hover:bg-[#615f5d] hover:text-white focus:ring-[#A8D5BA]/30"
                }`}
            >
              {t("nav.reservations")}
            </a>
            <a
              href="/takeaway"
              className={`inline-block border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-4 focus:outline-none ${theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-[#1A1A1A] focus:ring-white/30"
                : "border-[#615f5d] text-black hover:bg-[#615f5d] hover:text-white focus:ring-[#A8D5BA]/30"
                }`}
            >
              {t("nav.takeaway")}
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Menu Components */}
      {/* <MenuDisplay />
      <VeganMenuDisplay /> */}

      {/* Set Menu Modal */}
      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 "
          onClick={closeModal}
        >
          <div
            className={`relative max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl ${theme === "dark"
              ? "bg-[#1A1A1A] text-white"
              : "bg-white text-[#1A1A1A]"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`sticky top-0 z-10 flex justify-between items-center p-6 border-b ${theme === "dark"
                ? "border-white/20 bg-[#1A1A1A]"
                : "border-gray-200 bg-white"
                }`}
            >
              <h2
                className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-[#1A1A1A]"
                  }`}
              >
                {modalContent.title}
              </h2>
              <button
                onClick={closeModal}
                className={`p-2 rounded-full transition-colors duration-200 ${theme === "dark" ? "hover:bg-white/10" : "hover:bg-gray-100"
                  }`}
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div
                className={`prose prose-lg max-w-none ${theme === "dark" ? "prose-invert" : ""
                  }`}
              >
                <div className="whitespace-pre-line leading-relaxed text-base sm:text-lg">
                  {modalContent.description}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`sticky bottom-0 flex justify-end p-6 border-t ${theme === "dark"
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
                }`}
            >
              <button
                onClick={closeModal}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${theme === "dark"
                  ? "bg-[#A8D5BA] text-[#1A1A1A] hover:bg-[#A8D5BA]/90"
                  : "bg-[#A8D5BA] text-white hover:bg-[#A8D5BA]/90"
                  }`}
              >
                {t("menu.setMenus.readLess")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
