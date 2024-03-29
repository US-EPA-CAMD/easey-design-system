import { Button, TextInput, Label, Radio, CharacterCount, Alert, Fieldset } from '@trussworks/react-uswds';

export interface Subject {
  id: number;
  value: string;
}

export interface ContactFormProps {
  title?: string;
  summary: string;
  subjectsTitle?: string;
  subjects: Subject[];
  commentTitle?: string;
  submitted: boolean;
  submitStatus?: boolean;
  submitStatusText?: string;
}

export const ContactForm = ({
  title = 'Contact Us',
  summary,
  subjects,
  subjectsTitle = 'Comment Types',
  commentTitle = 'Comment',
  submitted = false,
  submitStatus,
  submitStatusText,
  onSubmit,
}: ContactFormProps & JSX.IntrinsicElements['button']) => {
  return (
    <>
      <div className="grid-row margin-top-5">
        <h3 className="text-bold font-heading-2xl">{title}</h3>
        <div className="flex-force-break" />
        <p>{summary}</p>
        <div className="flex-force-break" />
        <p className="text-italic margin-y-2">Required fields are marked with an asterisk (*)</p>
      </div>
      <div>
        <Label htmlFor="txtEmail">* Email</Label>
        <TextInput
          aria-required="true"
          className="modalUserInput"
          id="txtEmail"
          epa-testid="txtEmail"
          name="txtEmail"
          type="text"
        />
      </div>
      <div className="margin-top-2">
        <Fieldset legend={`* ${subjectsTitle}`} aria-required="true">
          {subjects.map((item) => {
            return (
              <Radio
                id={`radioSubject_${item.id}`}
                name="radioSubject"
                label={item.value}
                value={item.id}
                key={`radioSubjectKey_${item.id}`}
              />
            );
          })}
        </Fieldset>
      </div>
      <div className="margin-top-2">
        <Label htmlFor="txtComment" id="labelComment">
          * {commentTitle}
        </Label>
        <CharacterCount
          aria-required="true"
          isTextArea={true}
          id="txtComment"
          name="txtComment"
          maxLength={500}
          rows={3}
        />
      </div>
      <div className="margin-top-2">
        <Button
          className="padding-x-3 padding-y-2"
          type="button"
          id="btnSubmit"
          name="btnSubmit"
          onClick={onSubmit}
          data-testid="input-button-search"
        >
          Submit
        </Button>
      </div>
      {submitted ? (
        <div className="margin-top-2">
          {submitStatus ? (
            <Alert type="success" heading="Success" aria-live="assertive" headingLevel="h2">
              {submitStatusText}
            </Alert>
          ) : (
            <Alert type="error" heading="Error" aria-live="assertive" headingLevel="h2">
              {submitStatusText}
            </Alert>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ContactForm;
