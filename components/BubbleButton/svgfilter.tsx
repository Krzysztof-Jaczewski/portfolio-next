import { FC } from 'react';

const SvgFilter: FC = () => (
    <svg
        width={60}
        height={40}
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
    >
        <defs>
            <filter id='gooey'>
                <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='5'
                    result='blur'
                />
                <feColorMatrix
                    in='blur'
                    type='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='highContrastGraphic'
                />
                <feComposite
                    in='SourceGraphic'
                    in2='highContrastGraphic'
                    operator='atop'
                />
            </filter>
        </defs>
    </svg>
);

export default SvgFilter;
