import { Route, Routes } from 'react-router'

import AccordionDocPage from './docs/structure/accordion/AccordionDocPage'
import ExamplesPage from './examples/ExamplesPage'
import ActionsDrawerDocPage from './docs/actions/actionsDrawer/ActionsDrawerDocPage'
import AlertDocPage from './docs/feedback/alert/AlertDocPage'
import AnimatedTopBarDocPage from './docs/animations/animatedTopBar/AnimatedTopBarDocPage'
import AnimatedViewDocPage from './docs/animations/animatedView/AnimatedViewDocPage'
import AvatarDocPage from './docs/presentation/avatar/AvatarDocPage'
import AvatarLabelDocPage from './docs/presentation/avatarLabel/AvatarLabelDocPage'
import BadgeDocPage from './docs/presentation/badge/BadgeDocPage'
import BaseLayout from '../containers/layouts/BaseLayout'
import BlurViewDocPage from './docs/structure/blurView/BlurViewDocPage'
import BottomDrawerDocPage from './docs/modals/bottomDrawer/BottomDrawerDocPage'
import BreadcrumbDocPage from './docs/actions/breadcrumb/BreadcrumbDocPage'
import ButtonDocPage from './docs/actions/button/ButtonDocPage'
import CardDocPage from './docs/structure/card/CardDocPage'
import CheckboxDocPage from './docs/inputs/checkbox/CheckboxDocPage'
import ConfirmDocPage from './docs/feedback/confirm/ConfirmDocPage'
import CustomThemesGuidePage from './guides/theme/customThemes/CustomThemesGuidePage'
import DateInputDocPage from './docs/inputs/dateInput/DateInputDocPage'
import DatePickerDocPage from './docs/inputs/datePicker/DatePickerDocPage'
import DividerDocPage from './docs/helpers/divider/DividerDocPage'
import DocsLayout from '../containers/layouts/DocsLayout'
import DrawerDocPage from './docs/modals/drawer/DrawerDocPage'
import DropdownDocPage from './docs/actions/dropdown/DropdownDocPage'
import FlatListDocPage from './docs/list/flatList/FlatListDocPage'
import FloatingButtonDocPage from './docs/actions/floatingButton/FloatingButtonDocPage'
import FloatingMenuDocPage from './docs/actions/floatingMenu/FloatingMenuDocPage'
import FormDocPage from './docs/form/form/FormDocPage'
import FormGroupDocPage from './docs/form/formGroup/FormGroupDocPage'
import FormItemDocPage from './docs/form/formItem/FormItemDocPage'
import FormListDocPage from './docs/form/formList/FormListDocPage'
import GradientViewDocPage from './docs/structure/gradientView/GradientViewDocPage'
import GridDocPage from './docs/structure/grid/GridDocPage'
import GuidesLayout from '../containers/layouts/GuidesLayout'
import HomePage from './home/HomePage'
import I18nIntroGuidePage from './guides/i18n/intro/I18nIntroGuidePage'
import I18nTranslateGuidePage from './guides/i18n/translate/I18nTranslateGuidePage'
import IconDocPage from './docs/presentation/icon/IconDocPage'
import IconLabelDocPage from './docs/presentation/iconLabel/IconLabelDocPage'
import ImageBackgroundDocPage from './docs/presentation/imageBackground/ImageBackgroundDocPage'
import ImageDocPage from './docs/presentation/image/ImageDocPage'
import InstallGuidePage from './guides/install/intro/InstallGuidePage'
import LabelValueDocPage from './docs/presentation/labelValue/LabelValueDocPage'
import LayoutDocPage from './docs/structure/layout/LayoutDocPage'
import LayoutGuidePage from './guides/modifiers/layout/LayoutGuidePage'
import LazyRenderDocPage from './docs/helpers/lazyRender/LazyRenderDocPage'
import LinkDocPage from './docs/actions/link/LinkDocPage'
import LinkInputDocPage from './docs/inputs/linkInput/LinkInputDocPage'
import LoadingDocPage from './docs/state/loading/LoadingDocPage'
import MaskInputDocPage from './docs/inputs/maskInput/MaskInputDocPage'
import MenuDocPage from './docs/actions/menu/MenuDocPage'
import ModalDocPage from './docs/modals/modal/ModalDocPage'
import ModalsRouterDocPage from './docs/modals/modalsRouter/ModalsRouterDocPage'
import ModifiersIntroGuidePage from './guides/modifiers/intro/ModifiersIntroGuidePage'
import NotificationsDocPage from './docs/feedback/notifications/NotificationsDocPage'
import NumberInputDocPage from './docs/inputs/numberInput/NumberInputDocPage'
import PaginationDocPage from './docs/table/pagination/PaginationDocPage'
import ParallaxHeaderDocPage from './docs/animations/parallaxHeader/ParallaxHeaderDocPage'
import PickerDocPage from './docs/inputs/picker/PickerDocPage'
import PopoverDocPage from './docs/structure/popover/PopoverDocPage'
import RadioDocPage from './docs/inputs/radio/RadioDocPage'
import RateDocPage from './docs/presentation/rate/RateDocPage'
import RateInputDocPage from './docs/inputs/rateInput/RateInputDocPage'
import RateTagDocPage from './docs/presentation/rateTag/RateTagDocPage'
import ResponsiveIntroGuidePage from './guides/responsive/intro/ResponsiveIntroGuidePage'
import ResponsiveRenderDocPage from './docs/helpers/responsiveRender/ResponsiveRenderDocPage'
import ResultBarDocPage from './docs/presentation/resultBar/ResultBarDocPage'
import ResultDocPage from './docs/presentation/result/ResultDocPage'
import ScrollViewDocPage from './docs/list/scrollView/ScrollViewDocPage'
import SectionDocPage from './docs/structure/section/SectionDocPage'
import SegmentedPickerDocPage from './docs/inputs/segmentedPicker/SegmentedPickerDocPage'
import SelectDocPage from './docs/inputs/select/SelectDocPage'
import SizeGuidePage from './guides/modifiers/size/SizeGuidePage'
import SpacingGuidePage from './guides/modifiers/spacing/SpacingGuidePage'
import StatePresenterDocPage from './docs/state/statePresenter/StatePresenterDocPage'
import StorageIntroGuidePage from './guides/storage/intro/StorageIntroGuidePage'
import StylingGuidePage from './guides/modifiers/styling/StylingGuidePage'
import SubmitButtonDocPage from './docs/form/submitButton/SubmitButtonDocPage'
import SwitchDocPage from './docs/inputs/switch/SwitchDocPage'
import TableDocPage from './docs/table/table/TableDocPage'
import TabsDocPage from './docs/structure/tabs/TabsDocPage'
import TagDocPage from './docs/presentation/tag/TagDocPage'
import TextDocPage from './docs/text/text/TextDocPage'
import TextInputDocPage from './docs/inputs/textInput/TextInputDocPage'
import ThemeColorsGuidePage from './guides/theme/colors/ThemeColorsGuidePage'
import ThemeIntroGuidePage from './guides/theme/intro/ThemeIntroGuidePage'
import ThemePickerGuidePage from './guides/theme/picker/ThemePickerGuidePage'
import ThemeStatusBarGuidePage from './guides/theme/statusBar/ThemeStatusBarGuidePage'
import TooltipDocPage from './docs/presentation/tooltip/TooltipDocPage'
import TopBarDocPage from './docs/structure/topBar/TopBarDocPage'
import ValidationRulesDocPage from './docs/form/validationRules/ValidationRulesDocPage'
import VerticalTextDocPage from './docs/text/verticalText/VerticalTextDocPage'
import VerticalViewDocPage from './docs/helpers/verticalView/VerticalViewDocPage'
import ViewDocPage from './docs/structure/view/ViewDocPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />} path="">
        <Route path="/" element={<HomePage />} />
        <Route path="/examples" element={<ExamplesPage />} />

        <Route element={<GuidesLayout />} path="guides">
          <Route path="" element={<InstallGuidePage />} />
          <Route path="install" element={<InstallGuidePage />} />
          <Route path="theme" element={<ThemeIntroGuidePage />} />
          <Route path="themeColors" element={<ThemeColorsGuidePage />} />
          <Route path="themeStatusBar" element={<ThemeStatusBarGuidePage />} />
          <Route path="customThemes" element={<CustomThemesGuidePage />} />
          <Route path="themePicker" element={<ThemePickerGuidePage />} />
          <Route path="i18n" element={<I18nIntroGuidePage />} />
          <Route path="i18nTranslate" element={<I18nTranslateGuidePage />} />
          <Route path="storage" element={<StorageIntroGuidePage />} />
          <Route path="responsive" element={<ResponsiveIntroGuidePage />} />
          <Route path="modifiers" element={<ModifiersIntroGuidePage />} />
          <Route path="modifiersSpacing" element={<SpacingGuidePage />} />
          <Route path="modifiersLayout" element={<LayoutGuidePage />} />
          <Route path="modifiersSize" element={<SizeGuidePage />} />
          <Route path="modifiersStyling" element={<StylingGuidePage />} />
        </Route>

        <Route element={<DocsLayout />} path="docs">
          <Route path="" element={<div />} />
          // Structure
          <Route path="layout" element={<LayoutDocPage />} />
          <Route path="card" element={<CardDocPage />} />
          <Route path="view" element={<ViewDocPage />} />
          <Route path="gradientView" element={<GradientViewDocPage />} />
          <Route path="blurView" element={<BlurViewDocPage />} />
          <Route path="grid" element={<GridDocPage />} />
          <Route path="popover" element={<PopoverDocPage />} />
          <Route path="accordion" element={<AccordionDocPage />} />
          <Route path="tabs" element={<TabsDocPage />} />
          <Route path="topBar" element={<TopBarDocPage />} />
          <Route path="section" element={<SectionDocPage />} />
          // Modals
          <Route path="modal" element={<ModalDocPage />} />
          <Route path="modalsRouter" element={<ModalsRouterDocPage />} />
          <Route path="drawer" element={<DrawerDocPage />} />
          <Route path="bottomDrawer" element={<BottomDrawerDocPage />} />
          // Actions
          <Route path="button" element={<ButtonDocPage />} />
          <Route path="floatingButton" element={<FloatingButtonDocPage />} />
          <Route path="floatingMenu" element={<FloatingMenuDocPage />} />
          <Route path="link" element={<LinkDocPage />} />
          <Route path="dropdown" element={<DropdownDocPage />} />
          <Route path="menu" element={<MenuDocPage />} />
          <Route path="breadcrumb" element={<BreadcrumbDocPage />} />
          <Route path="actionsDrawer" element={<ActionsDrawerDocPage />} />
          // Form
          <Route path="form" element={<FormDocPage />} />
          <Route path="submitButton" element={<SubmitButtonDocPage />} />
          <Route path="formItem" element={<FormItemDocPage />} />
          <Route path="formList" element={<FormListDocPage />} />
          <Route path="formGroup" element={<FormGroupDocPage />} />
          <Route path="validationRules" element={<ValidationRulesDocPage />} />
          // Inputs
          <Route path="textInput" element={<TextInputDocPage />} />
          <Route path="numberInput" element={<NumberInputDocPage />} />
          <Route path="maskInput" element={<MaskInputDocPage />} />
          <Route path="rateInput" element={<RateInputDocPage />} />
          <Route path="checkbox" element={<CheckboxDocPage />} />
          <Route path="radio" element={<RadioDocPage />} />
          <Route path="switch" element={<SwitchDocPage />} />
          <Route path="select" element={<SelectDocPage />} />
          <Route path="picker" element={<PickerDocPage />} />
          <Route path="dateInput" element={<DateInputDocPage />} />
          <Route path="datePicker" element={<DatePickerDocPage />} />
          <Route path="segmentedPicker" element={<SegmentedPickerDocPage />} />
          <Route path="linkInput" element={<LinkInputDocPage />} />
          // Presentation
          <Route path="tag" element={<TagDocPage />} />
          <Route path="badge" element={<BadgeDocPage />} />
          <Route path="icon" element={<IconDocPage />} />
          <Route path="iconLabel" element={<IconLabelDocPage />} />
          <Route path="labelValue" element={<LabelValueDocPage />} />
          <Route path="avatar" element={<AvatarDocPage />} />
          <Route path="avatarLabel" element={<AvatarLabelDocPage />} />
          <Route path="rate" element={<RateDocPage />} />
          <Route path="rateTag" element={<RateTagDocPage />} />
          <Route path="result" element={<ResultDocPage />} />
          <Route path="resultBar" element={<ResultBarDocPage />} />
          <Route path="tooltip" element={<TooltipDocPage />} />
          <Route path="image" element={<ImageDocPage />} />
          <Route path="imageBackground" element={<ImageBackgroundDocPage />} />
          // Typography
          <Route path="text" element={<TextDocPage />} />
          <Route path="verticalText" element={<VerticalTextDocPage />} />
          // Table
          <Route path="table" element={<TableDocPage />} />
          <Route path="pagination" element={<PaginationDocPage />} />
          // List
          <Route path="scrollView" element={<ScrollViewDocPage />} />
          <Route path="flatList" element={<FlatListDocPage />} />
          // Feedback
          <Route path="notifications" element={<NotificationsDocPage />} />
          <Route path="alert" element={<AlertDocPage />} />
          <Route path="confirm" element={<ConfirmDocPage />} />
          // Helpers
          <Route path="divider" element={<DividerDocPage />} />
          <Route path="responsiveRender" element={<ResponsiveRenderDocPage />} />
          <Route path="verticalView" element={<VerticalViewDocPage />} />
          <Route path="lazyRender" element={<LazyRenderDocPage />} />
          // State
          <Route path="loading" element={<LoadingDocPage />} />
          <Route path="statePresenter" element={<StatePresenterDocPage />} />
          // Animations
          <Route path="animatedView" element={<AnimatedViewDocPage />} />
          <Route path="animatedTopBar" element={<AnimatedTopBarDocPage />} />
          <Route path="parallaxHeader" element={<ParallaxHeaderDocPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
