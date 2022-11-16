import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import Row from "./components/Row";
import Button from "./components/Button";

function App(props) {

    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState(null);
    const [currentNumber, setCurrentNumber] = useState("0");
    const numbers = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

    const handleNumberPress = useCallback((buttonValue) => {
        if (currentNumber === "0") {
            setCurrentNumber(`${buttonValue}`)
        } else {
            setCurrentNumber(`${currentNumber}${buttonValue}`)
        }
    }, [currentNumber]);

    const handleOperationPress = (buttonValue) => {
        setOperator(buttonValue);
        setSecondNumber(currentNumber);
        setCurrentNumber("0");
    };

    const handleClear = () => {
        setSecondNumber("");
        setOperator(null);
        setCurrentNumber("0");
    };

    const handleChangeSign = useCallback(() => {
        if (parseInt(currentNumber) > 0) {
            setCurrentNumber(`-${currentNumber}`)
        } else if (parseInt(currentNumber) < 0) {
            setCurrentNumber(currentNumber.slice(1))
        }
    }, [currentNumber])

    const first = +secondNumber
    const second = +currentNumber

    const getResult = () => {
        switch (operator) {
            case "+":
                setCurrentNumber(first + second)
                break
            case "-":
                setCurrentNumber(first - second)
                break
            case "*":
                setCurrentNumber(first * second)
                break
            case "/":
                setCurrentNumber(first / second)
                break
            default:
                setCurrentNumber(0)
                break;
        }
    };
    console.log(first, second, currentNumber)
    return (
        <View style={styles.container}>
            <Text style={styles.value}>
                {currentNumber}
            </Text>
            <Row>
                <Button text="AC" onPress={handleClear}
                        style={styles.topButtons}/>
                <Button text="+/-" onPress={() => handleChangeSign()}
                        style={styles.topButtons}/>
                <Button text="％" onPress={() => setCurrentNumber((first / 100) * second)}
                        style={styles.topButtons}/>
                <Button text="÷" onPress={() => handleOperationPress("/")}
                        style={styles.rightButtons}/>
            </Row>
            <Row>
                {numbers[0].map(number =>
                    <Button text={number} onPress={() => handleNumberPress(number)}/>)}
                    <Button text="×" onPress={() => handleOperationPress("*")} style={styles.rightButtons}/>
            </Row>
            <Row>
                {numbers[1].map(number =>
                    <Button text={number} onPress={() => handleNumberPress(number)}/>)}
                    <Button text="-" onPress={() => handleOperationPress("-")} style={styles.rightButtons}/>
            </Row>

            <Row>
                {numbers[2].map(number =>
                    <Button text={number} onPress={() => handleNumberPress(number)}/>)}
                    <Button text="+" onPress={() => handleOperationPress("+")} style={styles.rightButtons}/>
            </Row>

            <Row>
                <Button text="0" onPress={() => handleNumberPress("0")}/>
                <Button text="." onPress={() => handleNumberPress(".")}/>
                <Button text="=" onPress={() => getResult()} style={styles.rightButtons}/>
            </Row>

        </View>
    );
}

const styles = StyleSheet.create({
    rightButtons: {
        backgroundColor: "#ef9608",
        color: "#fff"
    },
    topButtons: {
        backgroundColor: "#979694",
        color: "#000"
    },
    value: {
        color: "#fff",
        fontSize: 42,
        textAlign: "right",
        marginRight: 20,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end",
    },
})

export default App;
