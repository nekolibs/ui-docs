import { View } from '@neko-os/ui'

import CodeComparisonSection from './CodeComparisonSection'
import FeaturesSection from './FeaturesSection'
import Footer from '../../containers/menus/Footer'
import HeroSection from './HeroSection'
import ThemeSection from './ThemeSection'

export default function HomePage() {
  return (
    <View flex padding={{ mdd: 'md', df: 'xl' }} bg="mainBG">
      <HeroSection />
      <FeaturesSection />
      <CodeComparisonSection />
      <ThemeSection />

      <Footer />
    </View>
  )
}
