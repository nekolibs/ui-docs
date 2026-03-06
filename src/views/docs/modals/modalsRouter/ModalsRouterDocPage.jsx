import { Text, View } from '@neko-os/ui'

import BasicUsageSample from './samples/BasicUsageSample'
import PassingParamsSample from './samples/PassingParamsSample'
import ContainerTypesSample from './samples/ContainerTypesSample'
import NavigationStackSample from './samples/NavigationStackSample'
import CloseAllSample from './samples/CloseAllSample'
import UpdateContainerSample from './samples/UpdateContainerSample'

export default function DocPage() {
  return (
    <View flex gap={45}>
      <View>
        <Text h1>ModalsRouter</Text>
        <Text text3>
          A stack-based navigation system for modals. Define routes with ModalRoute and navigate between them using
          useModalsNavigation. Supports Modal, Drawer, and BottomDrawer containers.
        </Text>
      </View>

      <BasicUsageSample />
      <PassingParamsSample />
      <ContainerTypesSample />
      <NavigationStackSample />
      <CloseAllSample />
      <UpdateContainerSample />

      <View>
        <Text h2>useUpdateModalContainer</Text>
        <Text text3>
          Hook that returns a function to update the modal container props (title, width, etc.) after the modal is
          already open. Useful for setting the title after fetching data.
        </Text>
      </View>

      <View>
        <Text h2>useModalsNavigation</Text>
        <Text text3>
          Hook that returns push(path, params), goBack(), and closeAll() to control the modal stack from any component
          inside ModalsRouter.
        </Text>
      </View>

      <View>
        <Text h2>useModalParams</Text>
        <Text text3>
          Hook used inside a modal route component to access the params object passed via push(path, params).
        </Text>
      </View>

      <View>
        <Text h2>useAllModalsParams</Text>
        <Text text3>
          Hook that returns an array of all modals currently in the stack, each with its path, params, and key.
        </Text>
      </View>
    </View>
  )
}
