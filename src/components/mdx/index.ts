// Components available in every chapter .mdx file without importing them.
import BarChart from './BarChart.astro';
import ConceptualModel from './ConceptualModel.astro';
import Hypothesis from './Hypothesis.astro';
import MainQuestion from './MainQuestion.astro';
import SubQuestions from './SubQuestions.astro';
import StepFlow from './StepFlow.astro';
import QuestionnaireTable from './QuestionnaireTable.astro';
import ComingLater from './ComingLater.astro';
import Scope from './Scope.astro';
import Table from './Table.astro';

export const mdxComponents = {
  BarChart,
  ConceptualModel,
  Hypothesis,
  MainQuestion,
  SubQuestions,
  StepFlow,
  QuestionnaireTable,
  ComingLater,
  Scope,
  table: Table,
};
