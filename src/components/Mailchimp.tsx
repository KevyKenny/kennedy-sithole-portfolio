"use client";

import { mailchimp } from '@/app/resources'
import { Button, Flex, Heading, Input, Text } from '@/once-ui/components';
import { Background } from '@/once-ui/components/Background';
import { useState } from 'react';
import { useTranslations } from 'next-intl';


function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export const Mailchimp = (
    { newsletter }: { newsletter: NewsletterProps}
) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);

    const t = useTranslations();

    const validateEmail = (email: string): boolean => {
        if (email === '') {
            return true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const debouncedHandleChange = debounce(handleChange, 2000);

    const handleBlur = () => {
        setTouched(true);
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        }
    };

    return (
        <Flex
            style={{overflow: 'hidden'}}
            position="relative"
            fillWidth padding="l"  radius="l" marginBottom="m"
            direction="column" alignItems="center" align="center"
            background="surface" border="neutral-medium" borderStyle="solid-1">
            <Background
                position="absolute"
                gradient={mailchimp.effects.gradient}
                dots={mailchimp.effects.dots}
                lines={mailchimp.effects.lines}/>
            <Heading style={{position: 'relative'}}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            <Flex
                fillWidth maxWidth={24}
                justifyContent="center" alignItems="center" gap="8"
                style={{ position: 'relative' }}>
                <Button
                    prefixIcon="email"
                    variant="primary"
                    size="m"
                    href={`mailto:kevykenny29@gmail.com`}
                    aria-label="Email kevykenny29@gmail.com">
                    kevykenny29@gmail.com
                </Button>
            </Flex>
        </Flex>
    )
}