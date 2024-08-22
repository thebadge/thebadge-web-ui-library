import { Story } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { DiplomaPreview, DiplomaPreviewProps } from './DiplomaPreview'
import { BadgePreviewEffects } from '@components/atoms/BadgePreview/BadgePreviewProps'

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
  title: 'Components/Atoms/DiplomaPreview',
  component: DiplomaPreview,
  argTypes: {
    backgroundUrl: {
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

const Template: Story<DiplomaPreviewProps & { descp: string }> = (args) => {
  if ('descp' in args) {
    // Workaround to fix an issue where storybook ignore the url argument called description
    args.description = args.descp
  }
  return (
    <div style={{ background: 'gray', padding: '32px', display: 'flex', justifyContent: 'center', height: '80vh' }}>
      <DiplomaPreview {...args} />
    </div>
  )
}

// Reuse that template for creating different stories
export const DiplomaPreviewWithDefaultBackgrounds = Template.bind({})
DiplomaPreviewWithDefaultBackgrounds.args = {
  date: 'November 9, 2023',
  studentName: 'Student Name Bla Bla ',
  courseName: 'Name of the course by Coursera',
  description: 'has successfully completed the course',
  badgeUrl: 'https://www.thebadge.xyz',
  issuedByLabel: 'Issued By',
  animationEffects: [] as BadgePreviewEffects[],
  textContrastLeft: 'light',
  textContrastRight: 'dark',
  signatureImageUrl:
    'https://images.unsplash.com/photo-1645484686977-dbddd9e1dc0a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  signerTitle: 'Max Mustermann',
  signerSubline: 'CEO of TheGreatestCompany',
  footerText: 'account.eth hast confirmed the identity xxx',
  issuerTitle: 'Course instructors',
  issuerDescription:
    '- Max Muster \n\n- Maxi Terman \n- Musi Maxtermann \n- Muxi Master \n- Maxi Mussiterman \n- Mux Maxirmann ',
}

export const DiplomaPreviewWithCustomBackgroundsAndAnimation = Template.bind({})
DiplomaPreviewWithCustomBackgroundsAndAnimation.args = {
  size: 560,
  date: 'November 9, 2023',
  studentName: 'Student Name Bla Bla ',
  courseName: 'Name of the course by Coursera',
  description: 'User with address: 0xD28....16eC has a degree in intellectual property from Austral University',
  badgeUrl: 'https://www.thebadge.xyz',
  animationOnHover: true,
  animationEffects: ['wobble', 'grow', 'glare'],
  issuedByLabel: 'Issued By',
  issuerAvatarUrl:
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  issuerIsVerified: true,
  issuerName: 'Issuer name',
  issuerProfileUrl: 'https://www.thebadge.xyz',
  backgroundUrl: EXAMPLE_URLS.backgroundFive,
  decorationBackgroundUrl: EXAMPLE_URLS.backgroundThree,
  textContrastLeft: 'dark',
  footerText: 'account.eth hast confirmed the identity xxx',
  sx: { scale: '0.8' },
}

/**
 * To be used as renderer
 */
export const DiplomaPreviewWithNoDefaults = Template.bind({})
DiplomaPreviewWithNoDefaults.args = {
  animationEffects: [] as BadgePreviewEffects[],
  textContrastLeft: 'light',
  textContrastRight: 'dark',
}
