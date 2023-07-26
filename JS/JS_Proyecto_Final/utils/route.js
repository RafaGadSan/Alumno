import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  printTemplateDashboard,
  printTemplateQuiz,
  printTemplateMemory,
  printTemplateTopo,
} from "../pages";

//Aquí controlamos los que se va renderizando

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      //comprobamos si hay user, y sino, que pinte el dashboard
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      printTemplateTopo();
      break;
    case "Quiz":
      printTemplateQuiz();
      break;
    case "TresEnRaya":
      "TresEnRaya()";
      break;
    case "Ahorcado":
      "Ahorcado()";
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      printTemplateMemory();
      break;
  }
};
