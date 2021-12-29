import { ReactNode } from 'react';

type IQuestionAnswerProps = {
  question: string;
  children: ReactNode;
};

const QuestionAnswer = (props: IQuestionAnswerProps) => (
  <div className="question-answer">
    <div className="text-2xl text-gray-900 font-semibold">{props.question}</div>

    <div className="mt-6 text-lg leading-7">{props.children}</div>

    <style jsx>
      {`
        .question-answer :global(p) {
          @apply mt-4;
        }

        .question-answer :global(a) {
          @apply text-primary-500;
        }

        .question-answer :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { QuestionAnswer };
