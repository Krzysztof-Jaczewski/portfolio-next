import { useEffect, useState } from 'react';

export const useMarksArray = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const { x, y } = cursorPosition;

    useEffect(() => {
        const updateMousePosition = (event: globalThis.MouseEvent) => {
            setCursorPosition({ x: event.clientX / 15, y: event.clientY / 15 });
        };

        window.addEventListener('mousemove', updateMousePosition);
        () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return [
        {
            id: 'mark1',
            content: '{}',
            style: {
                top: `calc(15% - ${y}px)`,
                left: `calc(15% - ${x}px)`,
            },
        },
        {
            id: 'mark2',
            content: '[]',
            style: {
                top: `calc(90% - ${y}px)`,
                left: `calc(90% + ${x}px)`,
            },
        },
        {
            id: 'mark3',
            content: '</>',
            style: {
                top: `calc(90% + ${y}px)`,
                left: `calc(5% - ${x}px)`,
            },
        },
        {
            id: 'mark4',
            content: '()',
            style: {
                top: `calc(90% + ${y}px)`,
                left: `calc(75% - ${x}px)`,
            },
        },
        {
            id: 'mark5',
            content: '===',
            style: {
                top: `calc(82% - ${y}px)`,
                left: `calc(12% + ${x}px)`,
            },
        },
        {
            id: 'mark6',
            content: '</>',
            style: {
                top: `calc(80% - ${y}px)`,
                left: `calc(50% - ${x}px)`,
            },
        },
        {
            id: 'mark7',
            content: '{}',
            style: {
                top: `calc(2% - ${y}px)`,
                left: `calc(50% - ${x}px)`,
            },
        },
        {
            id: 'mark8',
            content: '===',
            style: {
                top: `calc(25% - ${y}px)`,
                left: `calc(40% + ${x}px)`,
            },
        },
        {
            id: 'mark9',
            content: '()=>',
            style: {
                top: `calc(7% + ${y}px)`,
                left: `calc(8% + ${x}px)`,
            },
        },
        {
            id: 'mark10',
            content: '{}',
            style: {
                top: `calc(64% - ${y}px)`,
                left: `calc(15% + ${x}px)`,
            },
        },
        {
            id: 'mark11',
            content: '()=>',
            style: {
                top: `calc(60% + ${y}px)`,
                left: `calc(15% - ${x}px)`,
            },
        },
        {
            id: 'mark13',
            content: '()=>',
            style: {
                top: `calc(80% - ${y}px)`,
                left: `calc(84% - ${x}px)`,
            },
        },
        {
            id: 'mark14',
            content: '==',
            style: {
                top: `calc(48% + ${y}px)`,
                left: `calc(84% - ${x}px)`,
            },
        },
        {
            id: 'mark15',
            content: 'const',
            style: {
                top: `calc(23% - ${y}px)`,
                left: `calc(98% - ${x}px)`,
            },
        },
        {
            id: 'mark16',
            content: '//',
            style: {
                top: `calc(28% - ${y}px)`,
                left: `calc(35% - ${x}px)`,
            },
        },
        {
            id: 'mark17',
            content: ':)',
            style: {
                top: `calc(90% + ${y}px)`,
                left: `calc(35% + ${x}px)`,
            },
        },
        {
            id: 'mark18',
            content: 'let',
            style: {
                top: `calc(8% + ${y}px)`,
                left: `calc(95% - ${x}px)`,
            },
        },
        {
            id: 'mark19',
            content: '!==',
            style: {
                top: `calc(76% - ${y}px)`,
                left: `calc(6% - ${x}px)`,
            },
        },
        {
            id: 'mark20',
            content: '+=',
            style: {
                top: `calc(46% + ${y}px)`,
                left: `calc(6% + ${x}px)`,
            },
        },
        {
            id: 'mark21',
            content: '${}',
            style: {
                top: `calc(5% - ${y}px)`,
                left: `calc(20% + ${x}px)`,
            },
        },
        {
            id: 'mark22',
            content: '&&',
            style: {
                top: `calc(95% - ${y}px)`,
                left: `calc(70% + ${x}px)`,
            },
        },
    ];
};
