const courses = [
  {
    master: "Master 1",
    title: "Title 1",
    shortDesc: "Short description 1",
    fullDesc: "Full description 1"
  },const products = [
  {
    name: 'Amgalita 10 kg Patissiàre prix du jour ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: 'kg',
  },
  {
    name: 'Fino ALITKANE 10kg prix du jour ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: 'kg',
  },
  {
    name: 'Amgalita 1 kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: 'kg'
  },
  {
    name: 'Semoule fine ALITKANE 5kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pop corn au kg ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Blé haché au kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tagliatelle DIVELLA 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tagliatelle verte ARRIGHI 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tagliatelle Barilla 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Penne DIVELLA 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Penne ARRIGHI 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Penne BARILLA 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaguetti ITALY DIVELLA 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaguetti ARRIGHI 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaghetti N°3 Barilla 500 g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaghetti N°5 Barilla 500 g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaghetti SANS GLUTEN Barilla 400 g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaguetti Barilla Bio 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Spaguetti N°7 BARILLA 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Linguine N°14 DIVELLA 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Linguine N° 9 ARRIGHI 500 g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Linguine BAVETE BARILLA N° 13',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'fusilli tricolor 500 g REGGIA',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fusilli DIVELLA 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fusilli ARRIGHI 500g ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Farfalla panzani 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Farfalle ARRIGHI 500g Italy ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous fin Tria (SABA) au kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous MOYEN SABA (TRIA) 25kg au kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous moyen ALITKANE 1kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous Moyen Dari 1 Kg( p du j) ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous Fin DARI 1kg',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous complet DARI 500g ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couscous balboula DARI 1 kg ',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tchicha BALBOULAaukg',
    category: 'Farine - semoule - blé',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz CIGALA semi long 5 kg ',
    category: 'Le Riz',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz long blanchi cigala 1 kg (emballage bleu)',
    category: 'Le Riz',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz rond CIGALA 5KG (emba vert)',
    category: 'Le Riz',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz étuvé Cigala 5kg ',
    category: 'Le Riz',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz caprice import 5kg au kg ( prix du jour)',
    category: 'Le Riz',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vermicelle de chine auKg',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vermicelle de riz 460g Golden Flower ',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vermicelle moyenne Alitkane 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'LASAGNE ARRIGHI 500G',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Lasagne Barilla 500g',
    category: 'Les pâtes ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Quinoa blanc Khayrat 500g',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Quinoa noir Khayrat 500g',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'QUINOA ROUGE KHAYRAT 500G',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'QUINOA TRICOLOR 500G KHAYRAT',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile table soja SIOF 5L (prix jr)',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile tournesol HUILOR 5 L prix du jour ',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile sp friture LESIEUR 5L PRIX DU JOUR ',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile de friture FRITYS 10L au L 10',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile dolive Mabrouka 1L ',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile dolive vierge Extra ATLAS 1L prix du j',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile pimentée PIKAROM x 220',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile pimentée STAR x300 ',
    category: 'Les Huiles',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème balsamique 250 g PONTI ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Moutarde sachet 7g x 220 PIK',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Moutarde sachet 7g x 220 STAR ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mayonnaise sachet 10g x 220 PIK',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mayonnaise sachet STAR x 220 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ketchup Sach PIK 10g x 220 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ketchup sach STAR x 220 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'hot Sauce Piquante 7g Star x220 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce piquante Sachet Pikarom x 220',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce Pizza AICHA 4au4 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce pizza BANGOR 5au1 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tomate AICHA 4au4 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce BARBECUE BANGOR 2 KG ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Hot Sauce OK 2kg',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tabasco USA RED ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SAUCE ALGERIENNE OK 950G',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SAUCE ANDALOUSE OK 950G ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SAUCE Biggy BURGER OK 950G',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SAUCE Biggy TASTY OK 950G',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce Mayonaise OK 2et1 KG',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SAUCE MAYONNAISE STAR SEAU 3650 G',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ketchup 2 kg Star ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mayonnaise STAR 5au1 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Moutarde STAR 5au1 ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce champignon  SOJA DARK150ml',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce champignon Khayrat 8L ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce soja au champignon  8L ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce soja light  8L ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce soja light  150ml',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'sauce WORCESTERSHIRE 295 ml ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce teryaki 1.8L ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sweet chili sauce 1et8L  ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'hot chili sauce 150ml Siriracha ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Hot chili sauce Siriracha  482g ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fish sauce 620ml ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fish sauce nuocmam 5L ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Hot Sauce HARMONY 88 ml',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce aux huitres oyster 5L COPR ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce barbecue STAR TEB 310g ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sauce Demi Glace fond brun ',
    category: 'Les sauces',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Parmesan Grana Vita aukg ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Parmesan GRANA PADANO Zanetti au KG',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage bleu Bergader au kg ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage emmental bloc OR BLANC au kg ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage Emmental plaquette OR BLANC au  ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage brie Gran Coeur 1kg',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Camembert Grand coeur 250g',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mascarpone Italie Or blanc 250g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ricotta italie 250 g Or Blanc ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'RIZ ARBORIO RISOTTO 500 g',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Riz noir SCOTTI 1KG ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage Frais Jben Jebly 190g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'FROMAGE CHEDDAR BLOC GRAN COEURauKG',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage EDAM boule GRAN COEUR aukg ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Beurre CENTRALE aukg',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Beurre IRELAND 25kg au k g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'fromage tranche Cheddar OR BLANC 200G ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage tranche HAMBURGER OR BLANC 200g',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage tranche KHAYRAT x24',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage cheddar Goldium 88tranches 1082et4g',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage gouda nature Gran Coeur au kg',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mozzarelle Forest 1kg ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème cheese FOREST 1kg',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème cheese President 180g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Roquefort Société tranche 100g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fromage emmental rapé President 500g ',
    category: 'Les Fromages',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'sanida  SAC 50 kg ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'sanida sucre 2kg',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre roux cristalisé 1kg ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre Cassonade SAINT LOUIS 1kg ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre sachet Stick 8g SOLIDERNET 10 KG',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre morceau café  5 KG',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre morceaux thé 5 KG',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sweet n Low x 50 ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'glucose 1kg',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pate à sucre blanc 1kg ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'SUCRE NEIGE ETERNELLE DGF 5KG',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre glace Ecomab 5kg ',
    category: 'Les sucres ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé sultan 4011 - 200g au kg ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé vert Sultan Anbar 200g aukg ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé vert Bellar aukg (prix du j) ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé vert sachet x 50 bellar',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé grain Sultan ljawhar au kg ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Verveine sachets sultan x100',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Verveine Feuille MONDEPICES 50g prix du jour ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé fruit selection AHMED TEA x 20 ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé camomille AHMED TEA x 20sachets',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé lemon Vitality AHMED x 20',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé Mint Mystique AHMED TEA x 20 ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thé Vanille AHMED TEA x 20 ',
    category: 'Thé et infusions ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Oeuf Matinales au  prix du jour (emb carton) ',
    category: 'Oeuf',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Oeuf de caille au',
    category: 'Oeuf',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jambon de dinde fumée OUSOL DINDY ',
    category: 'La charcuterie',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jambon de dinde fumé KOUTOUBIA',
    category: 'La charcuterie',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jambon de boeuf fumé KOUTOUBIA ',
    category: 'La charcuterie',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Salami de dinde DINDY ',
    category: 'La charcuterie',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Hot dog 250 g DINDY ',
    category: 'La charcuterie',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon à lhuile Tam 400g ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon entier TAM 1et7kg ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon Tam 4au4 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon à lhuile veg Pescada 80g ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon PESCADA 1.700g ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thon entier Challa 1et7kg ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Champignon de paris DU CHEF 4au4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Champignon Du chef 4au4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mais MIDO 4au4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Epis de mais JESSY 1au2',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mais Du Chef 1au2 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Lait de Coco 1au2 JESSY ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Créme De Coco JESSY 1au2 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Germes de Soja HARMONY 1au2',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Lychees au sirop Jessy 1au2 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Haricot rouge Harmony 4au4 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ananas au sirop HOKEE 4au4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Peche au sirop Chalupa 4au4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Capre Siof 4au4 ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olives Noires entieres 5au1 Oualili ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olive vert entier Sesta 5au1',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olives noires denoyautées Mabrouka 5au1',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olive vert dénoyauté 5au1 SIOF ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olives noires OUALILI 3au1 Coupées ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Olives vertes coupées 3au1 Oualili',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mais ARKAM 3au1',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Anchois marinés 750 g KING ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Filets d Anchois salés FATINA 50g',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Filet danchois salés à lhuile CONSUL 793g ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Artichauts confits Monegasque 1Kg ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Poivrons farcis au thon et aux anchois 1kg ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tomate confites à lhuile 1kg la monégasque ',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cornichons 72 Cl Pikarom ( verre )',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cornichons PIK 5au1 C4',
    category: 'Conserve Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sel de chine 1 kg LM ',
    category: 'Sels',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sel gros Route du Sel 1kg ',
    category: 'Sels',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sel gros SEL DEREL 1kg ',
    category: 'Sels',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sel de table STAR 400g ',
    category: 'Sels',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sel de cuisine DAUPHIN 500 g ',
    category: 'Sels',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre balsamique CHATEL 500ml ',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre blanc STAR 50 cl ',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre dAlcool Dessaux GM 50 cl Pik ',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre dalcool Dessaux 5L ',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre de riz 623 ml CHAIN KWO',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre de vin CHATEL à léchalote 500ml',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre de vin rouge Chatel 500ml',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre DE XERES CHATEL 500 ml',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Vinaigre framboise 50 cl Chatel',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'vinaigre star AROM.Citron 50cl ',
    category: 'Vinaigres',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Amande effilée YAMA 1kg ',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Amande poudre YAMA 1kg ',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Amande haché YAMA 2kg au kg ',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Amande roussi 1er choix MONDEPICES 1kg ',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'AMANDE au Kg',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Noix CHILI VRAC auKg prix du jour',
    category: 'Les AMANDES ET Noix',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Choco 3g Bat 46% AIGUEBELLE 1.6 kg',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat AIGUBELLE noir 2KgauKg ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat blanc 5au5 900g AIGUEBELLE ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat dessert 55% 175g AIGUEBELLE ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat noir de couverture 72% AIGUEBELLE',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat noir de couverture 55% AIGUEBELLE',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat noir Dessert 72% 175G AIGUEBELLE',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Drops chocolat YAMA 1kg ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cacao poudre MONDEPICE 1kg ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cacao poudre Yama 5kg ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Choco mondial 1kg ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocao IDEAL ENERGIE 480g ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Caobel 100g ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Caobel 500g ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chocolat KIT KAT ',
    category: 'Chocolat',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Topping chocolat MIGAROM 1kg',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Topping caramel MIGAROM 1kg ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Topping Fraise MIGAROM 1kg ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Topping Mangue MIGAROM 1kg ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sirop à la menthe 75cl DUVAL ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sirop de grenadine 75cl DUVAL ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sirop sucre de canne MONIN 70cl ',
    category: 'Topping et Sirop',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Confiture abricot ARABIA 20g ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Confiture fraise ARABIA 25g ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel Arabia 4et5kg ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel portion ARABIA 20g ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel pur ARABIA 4au4 ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel 4au4 zemzami',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel glucose El Yassmin 4 kg ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Miel glucose elyassmine 700g ',
    category: 'Confiture et Miel',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Puré de Fraise 1kg DGF ',
    category: 'Puré ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Purée passion 1 kg DGF ',
    category: 'Puré ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Purée framboise DGF 1L',
    category: 'Puré ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Puré de Mangue DGF 1L ',
    category: 'Puré ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus citron - gingembre nectar VALENCIA 1 L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus dananas Nectar VALENCIA 1L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus dorange NECTAR VALENCIA 1 L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus de mangue Nectar VALENCIA 1L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus DE PECHE NECTAR VALENCIA 1 L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Jus Pina Colada VALENCIA 1L ',
    category: 'Les Jus',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Arome de France PM 28 ml',
    category: 'Les Arômes',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Arome de france vanille verre 500 ml',
    category: 'Les Arômes',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Arome vanille poudre 1 kg',
    category: 'Les Arômes',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Créme Cuisine SNEL 1L ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème sucrée Snel 1L ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Créme Elle&Vire 1L(spécial cuisson) ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Créme Elle&Vire 1L(patiss)',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème president 1L UHTprix du jour ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème cuisson Halta 1 L ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème végètale Bombe HALTA 250ml',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème végétale Liola 1 L ',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Crème végétale suc HULALA1L import EX',
    category: 'Les Crémes pour patisserie et cuissons ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'kHLIE AHLFES ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Champignon noir 12g ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Champignon noir 1kg ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fécule de pomme de terre  1kg',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Shitakee 1kg ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Shichimi  300g',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chapelure japonnaise Panko  10kg',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Chaplure asiatique PANKO 1 kg ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Wasabi poudre  1kg',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gingembre rose 1et5kg  au  ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Huile de sésame  620ml ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gousse de Vanilleau prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Safran pur MONDEPICES 1g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ail rouge MONDEPICES 1kg prix du jour',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cacahouète déco MONDEPICES 1kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cannelle branche 250g MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Coco rapé MONDEPICES 500g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'coriandre grain 250g MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'coriandre moulu 250g MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cumin 250g MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Curcuma MONDEPICES 250g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Etoile danis (badiane) Mondepice 250g prix du jour',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Feuille de laurier 100g MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fève sec MONDEPICES 1kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gingembre MONDEPICES 250g prix du jour',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gingembre Frais Prix du jour aukg',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Haricot blanc MONDEPICES 1kg (prix du jour)',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Hot poivron Mondepice 100g ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Lentille MONDEPICES 1kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Noisette MONDEPICES 1kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Oreillons dabricot sec MONDEPICES 1kg prix du j ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pignon de pin Mondepices 1kg',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Piment doux MONDEPICES 250g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Piment fort MONDEPICES 250g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pistache nature MONDEPICES 1kg ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pois cassé Mondepice 1kg',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pois chiche MONDEPICES 1kg prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Noix de cajou grillé MONDEPICES 1 kg p du j ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Poivre noir grain 250g MONDEPICES',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Poivre noir MONDEPICES moulu 250g prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Raisin sec rouge MONDEPICES 1KG prix du j ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Raisins sec golden 1 kg MONDEPICES prix du jour ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sésame blanc Mondepice 1kg',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Thym Mondepice 100g',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite sushi ST1',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette sushi ST2',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite sushi ST3',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite sushi 25 st4 simple',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette sushi ST5',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite sushi st6 simple',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite Sushi ST8',
    category: 'Barquettes Sushi ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette PET noir auK 0020B avec  couvercle transparent ',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade ronde Kraft 750ml',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade ronde Kraft 500ml ',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette salade bowl avec couvercle 750 cc',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'R1000 PLAST NOIR PREMIUM',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade plas R250',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade R500',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite plast salade R750 Sel',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'BOITE PLAS salade R1000 Sel ',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade G250',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade plast G500',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade plast G750 Sore',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite salade plast G1000 Sore',
    category: 'Boite Salad en Kraft et Plastique ',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gob cart 4oz + couv PEO',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gob cart 8oz + couv PEO',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Goblet 14oz Trans SYGMA + couv.JUS',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gob blanc PM 18cl x 100 à eau',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gobl Trans PM18cl X 100',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gob Cocktail 42cl + couv bombée ',
    category: 'Les Goblets',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pot de sauce 3ozx100 (80cc) rect',
    category: 'Les Pot de sauce',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pot de sauce rectg 1oz x 100 (20cc)',
    category: 'Les Pot de sauce',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pot de sauce rond 60ml 2oz + couv x 100',
    category: 'Les Pot de sauce',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pot sauce trans 1 oz +couv x 100',
    category: 'Les Pot de sauce',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq 420 alum 15 cm',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq 760 Alum 3 portions',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq 808 alum rond 18.2*3.8cm',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq 820 Alum 2 portions',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq 890 alum 20x13',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq alum 368 (196x123*45 )(650CC) LASAGNE',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq alum 71120 flan',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq alum rond 22 cm ',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette alum ronde Large 22cm',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette alum rond profond 31135 GM ',
    category: 'Barquettes Aluminium',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite pizza 24 cm SORE',
    category: 'Boite Pizza',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite pizza 26 cm SORE',
    category: 'Boite Pizza',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite pizza 29 cm SORE',
    category: 'Boite Pizza',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite pizza 31cm SORE',
    category: 'Boite Pizza',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite pizza 40cm SORE',
    category: 'Boite Pizza',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq mousse 152x140*76 (HB6) HUMBURGER',
    category: 'Barquette Mousse',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq mousse 240x200*90 (LB2)',
    category: 'Barquette Mousse',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barq mousse 3 comp (LB3)',
    category: 'Barquette Mousse',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Barquette Mousse GM 1seul comp',
    category: 'Barquette Mousse',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Poche jetable triangle ITALY x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Devant jetable x 100 pcs ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Calots bouffant (charlotte) rond x100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Charlotte noir x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gant latex x100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gant Noir latex free x 100 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gant sans Pouder Vinyl MEDIUM x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gant patisserie en plastique x100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gant spontex',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Serpilière blanc 1er choix GM ',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Serpilliére GM ',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Serpilière SPEED(66x40 cm)',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Raclette 60 cm ',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Balais GM Dur',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Balais GM souple',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Manche en bois filetage',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Eau de javel 5L 6° DUBAI',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Désinfectant (sani) 5L DUBAI',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Désinfectant Exxeet 1 L ',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Javel EXET 1L',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Javel Ace 1L',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Javel ace 2.5 L',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac cong avec zip 3L (23x28) large 15s',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac cong avec zip 5L (23 x 39 )extra large 10s ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac sous vide aliment et congelation 160x200au',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac non tissé blanc 26x24x12cm au',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac kraft 22x10x28cm ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac kraft MM 26x16x29cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sac kraft 32x17x42 cm ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'sachet viennoiserie vergé PM Top Sac',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sachet viennoiserie vergé MM Top Sac',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sachet viennoiserie vergé GM Top SAC',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier sandwich 5kg ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier cuisson Rouleau x 50 m',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier cuisson SAGA X500 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier cuisson x 500 ETOILE',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier glace 5 kg aukg',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'sachet frit mini x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sachet frit PM DISTRI anti graissex100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'FILM ALIMENTAIRE BES Pack 30CMau600g',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'FILM ALIMENTAIRE BES pack 45CM (1600g)',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Aluminium PRO',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Assiette plas rond x20( 18 cm)',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Assiette plastique x 20 (22cm)',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fourchette noire luxe x100 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Fourchette plastique x100 GM',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Cuillière plastiqueGM x100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couteau plas transparent luxe x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Couteau cristal Usay x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille enveloppée coudée x 200',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille Artistique Enveloppée x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille Artistique x 100',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille enveloppée papier droite x 500',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille Large coudée noire x 500',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Paille simple x 100 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pailles enveloppées plas droite x500',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier cuisine GM 1.5 kg',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier hyg 1 er choix 350 g',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Papier hyg BRAVO x 4 (1er choix ) ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Mouchoir plas x 600 SWEET',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Serviette ARAX 30 x 30 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Serviette 2plis33 x33 SWEET x100 ',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 12 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 15 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 18 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 18 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 20 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 23 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boite à patisserie 25 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Ail semoule DUPRO 500g ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Curry Dupro 450g ',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Estragon DUPRO 80 G',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Herbes de provence Dupro 230g',
    category: 'Epice - Grain et feculent',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Poivre vert 70ml DUCROS',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Boudoir Savoiardi 400g Lady Finger ',
    category: 'Autres produits Alimentaires',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Détergent ZEN 10kg au kg ',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Tid x48',
    category: 'Produits Entretien',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 18 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 22cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 24cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 26 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 28 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 28 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte doré 32 cm',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte à buche 20x10',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sous tarte à buche 25x 10',
    category: 'Autres Produits Emballage',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Damti Ail x 10',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Bouillon Damti boeuf x 36',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Bouillon damti poisson x 8 ',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Bouillon Damti poulet x 36 ',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Knor boeuf x 8',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Knor Boeuf x45',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Knor poulet x 8',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Knorr DOUIMA SAFRAN X8',
    category: 'Les Boullons',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Levure chimique Ideal sachet x100',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Sucre Vanille ideal Sachet x 100 ',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Pate amande 50% ecomab 4kg au kg ',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Praline amande 50% ECOMAB 4kg au kg ',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Gélatine DUPRO 1kg ',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
  {
    name: 'Nappage Yama 4kg ',
    category: 'Autres Produits pour patisseries',
    checked: false,
    quantity: 1,
    unit: ''
  },
];
  {
    master: "Master 2",
    title: "Title 2",
    shortDesc: "Short description 2",
    fullDesc: "Full description 2"
  },
  {
    master: "Master 3",
    title: "Title 3",
    shortDesc: "Short description 3",
    fullDesc: "Full description 3"
  }
];

const coursesSection = document.getElementById("courses");

for (let i = 0; i < courses.length; i++) {
  const course = courses[i];

  const courseDiv = document.createElement("div");
  courseDiv.className = "course";

  const courseTitle = document.createElement("h3");
  courseTitle.innerText = `${course.master}: ${course.title}`;

  const courseShortDesc = document.createElement("p");
  courseShortDesc.innerText = course.shortDesc;

  const courseFullDesc = document.createElement("p");
  courseFullDesc.innerText = course.fullDesc;
  courseFullDesc.style.display = "none";

  const viewMoreButton = document.createElement("button");
  viewMoreButton.innerText = "View More";
  viewMoreButton.addEventListener("click", () => {
    courseFullDesc.style.display = "block";
    viewMoreButton.style.display = "none";
  });

  courseDiv.appendChild(courseTitle);
  courseDiv.appendChild(courseShortDesc);
  courseDiv.appendChild(courseFullDesc);
  courseDiv.appendChild(viewMoreButton);

  coursesSection.appendChild(courseDiv);
}
