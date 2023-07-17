import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { MiniBadgePreview } from './MiniBadgePreview'
import { BadgePreviewEffects, MiniBadgePreviewProps } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { colors, IconBadge } from '../../../../index'

const EXAMPLE_URLS = {
  backgroundOne:
    'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  backgroundTwo:
    'https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  backgroundThree:
    'https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  backgroundFour:
    'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  backgroundFive:
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  backgroundSix:
    'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80',
}

export default {
  title: 'Components/Atoms/BadgePreview/mini',
  component: MiniBadgePreview,
  argTypes: {
    badgeBackgroundUrl: {
      options: Object.keys(EXAMPLE_URLS), // An array of serializable values
      mapping: EXAMPLE_URLS, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          backgroundOne: 'One',
          backgroundTwo: 'Two',
          backgroundThree: 'Three',
          backgroundFour: 'Four',
          backgroundFive: 'Five',
          backgroundSix: 'Six',
        },
      },
    },
  },
} as Meta

const Template: Story<MiniBadgePreviewProps> = (args) => {
  return (
    <div
      style={{
        background: 'gray',
        padding: '32px',
        gap: '32px',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <MiniBadgePreview {...args} />
      <MiniBadgePreview {...args} description={args.description.slice(0, 13)} />
    </div>
  )
}

const TemplateMixed: Story<MiniBadgePreviewProps> = (args) => {
  return (
    <div
      style={{
        background: 'gray',
        padding: '32px',
        gap: '32px',
        display: 'flex',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <MiniBadgePreview {...args} buttonTitle="Example" />
      <MiniBadgePreview {...args} miniIcon={<IconBadge width={20} height={20} color={colors.white} />} />
    </div>
  )
}

// Reuse that template for creating different stories
export const BadgePreviewLongTexts = Template.bind({})
BadgePreviewLongTexts.args = {
  title: 'INFO TITLE',
  category:
    'Subline Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  description:
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  badgeBackgroundUrl: EXAMPLE_URLS.backgroundOne,
  animationEffects: [] as BadgePreviewEffects[],
  textContrast: 'dark-withTextBackground',
  textContrastOutside: 'dark-withTextBackground',
  highlightColor: colors.greenLogo,
  buttonTitle: 'CURATE',
  miniIcon: <IconBadge width={25} height={25} color={colors.white} />,
  selected: true,
}

export const BadgePreviewWithAnimationOnHover = Template.bind({})
BadgePreviewWithAnimationOnHover.args = {
  title: 'Diploma in Intellectual Property',
  category: 'Diploma certificate.',
  description: 'User with address: 0xD28....16eC has a degree in intellectual property from Austral University',
  imageUrl:
    'https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow', 'glare'],
  badgeBackgroundUrl: EXAMPLE_URLS.backgroundOne,
  textContrast: 'dark-withTextBackground',
  highlightColor: colors.blue,
  textContrastOutside: 'dark-withTextBackground',
  buttonTitle: 'MINT',
  miniIcon: <IconBadge width={25} height={25} color={colors.white} />,
}

export const BadgePreviewWithButtonAndIconOnly = TemplateMixed.bind({})
BadgePreviewWithButtonAndIconOnly.args = {
  title: 'Diploma in Intellectual Property',
  category: 'Diploma certificate.',
  description: 'User with address: 0xD28....16eC has a degree in intellectual property from Austral University',
  imageUrl:
    'https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow', 'glare'],
  badgeBackgroundUrl: EXAMPLE_URLS.backgroundOne,
  textContrast: 'dark-withTextBackground',
  highlightColor: colors.greenLogo,
  textContrastOutside: 'dark-withTextBackground',
}
