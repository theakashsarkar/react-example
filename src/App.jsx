import styled from 'styled-components';
const BaseButton = styled.button`
    border: none;
    outline: none;
    border-radius: 0.15rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

const PrimaryButton = styled(BaseButton)`
    background: red;
    color: white;
`;

const App = () => {
    return <div>
        <h1>styled componet</h1>
        <BaseButton dark>I'm a button</BaseButton>
        <PrimaryButton>I'm primary button</PrimaryButton>
    </div>
}
export default App;