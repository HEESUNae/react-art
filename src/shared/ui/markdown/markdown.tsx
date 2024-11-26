import MDEditor from '@uiw/react-md-editor';

export function Markdown({ content }: { content: string }) {
  return <MDEditor.Markdown source={content} style={{ backgroundColor: 'transparent' }} />;
}
