import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { PendingBadgeOverlay, PendingBadgeOverlayProps } from './PendingBadgeOverlay'
import { BadgePreview } from '@components/atoms/BadgePreview/v2/BadgePreview'
import { MiniBadgePreview } from '@components/atoms/BadgePreview/mini/MiniBadgePreview'
import { BadgePreviewEffects, BadgeTextContrast } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { colors } from '../../../index'

export default {
  title: 'Components/Overlays/PendingBadgeOverlay',
  component: PendingBadgeOverlay,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<PendingBadgeOverlayProps> = (args) => (
  <div style={{ background: 'black' }}>
    <PendingBadgeOverlay {...args} />
  </div>
)

const badgeCommonArgs = {
  title: 'Diploma in Intellectual Property',
  category: 'Diploma certificate.',
  description: 'User with address: 0xD28....16eC has a degree in intellectual property from Austral University',
  imageUrl:
    'https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow', 'glare'] as BadgePreviewEffects[],
  badgeBackgroundUrl:
    'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  textContrast: 'dark-withTextBackground' as BadgeTextContrast,
}

// Reuse that template for creating different stories
export const SampleBadgeWithPendingBadgeOverlay = Template.bind({})
SampleBadgeWithPendingBadgeOverlay.args = {
  badge: <BadgePreview {...badgeCommonArgs} size={'medium'} badgeUrl={'https://www.thebadge.xyz'} />,
  percentage: 60,
}

export const SampleBadgeWithPendingBadgeOverlayWithTimeLeft = Template.bind({})
SampleBadgeWithPendingBadgeOverlayWithTimeLeft.args = {
  badge: <BadgePreview {...badgeCommonArgs} size={'medium'} badgeUrl={'https://www.thebadge.xyz'} />,
  percentage: 63,
  timeLeft: {
    quantity: 10,
    unitText: 'days left',
  },
}

export const SampleBadgeWithPendingBadgeOverlayWithCustomColors = Template.bind({})
SampleBadgeWithPendingBadgeOverlayWithCustomColors.args = {
  badge: <BadgePreview {...badgeCommonArgs} size={'medium'} badgeUrl={'https://www.thebadge.xyz'} />,
  percentage: 81,
  timeLeft: {
    quantity: 10,
    unitText: 'days left',
  },
  backgroundShadowColor: colors.blueLight,
  progressDoneStrokeColor: colors.blue,
  progressRemainingStrokeColor: colors.orangeWarning,
}

export const SampleMiniBadgeWithPendingBadgeOverlay = Template.bind({})
SampleMiniBadgeWithPendingBadgeOverlay.args = {
  badge: <MiniBadgePreview {...badgeCommonArgs} />,
  percentage: 62,
}

export const SampleMiniBadgeWithPendingBadgeOverlayWithTimeLeft = Template.bind({})
SampleMiniBadgeWithPendingBadgeOverlayWithTimeLeft.args = {
  badge: <MiniBadgePreview {...badgeCommonArgs} />,
  percentage: 65,
  timeLeft: {
    quantity: 153,
    unitText: 'hours left',
  },
}

export const SampleMiniBadgeWithPendingBadgeOverlayWithCustomColors = Template.bind({})
SampleMiniBadgeWithPendingBadgeOverlayWithCustomColors.args = {
  badge: <MiniBadgePreview {...badgeCommonArgs} />,
  percentage: 72,
  timeLeft: {
    quantity: 3,
    unitText: 'months left',
  },
  backgroundShadowColor: colors.greenLight,
  progressDoneStrokeColor: colors.green,
  progressRemainingStrokeColor: colors.white,
}
