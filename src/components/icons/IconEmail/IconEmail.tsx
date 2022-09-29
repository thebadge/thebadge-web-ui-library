import * as React from 'react'
import { MailOutline } from '@styled-icons/material/MailOutline'
import { IconProps } from '../IconProps'

export const IconEmail = (props: IconProps) => (
    <a href={props.link} target={'_blank'} rel="noreferrer">
        <MailOutline size={28} className={`fill--${props.color}`} fill={props.color} />
    </a>
)
