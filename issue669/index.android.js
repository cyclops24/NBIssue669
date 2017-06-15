/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Container, Header, Body, Title, Content, Button, Text, Right, Left,  Icon,    Badge, Card, CardItem, Form, Item, Label, Input } from 'native-base';

export default class issue669 extends Component {
  render() {
    return (
      <Container>
            <Header>
                <Body style={{flex:0, flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <Icon name='person' size={20} color="#FFFFFF"/>
                    <Title>Issue 669</Title>
                    <Icon name='person' size={20} color="#FFFFFF"/>
                </Body>
            </Header>
            <Content padder keyboardShouldPersistTaps="always">
                <Text>This card is break because it's contain Form component.</Text>
                <Card>
                    <CardItem header style={{ backgroundColor: 'lightgray' }}>
                        <Right>
                            <Text>This is Right align text </Text>
                        </Right>
                        <Badge primary>
                            <Text>step 1</Text>
                        </Badge>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text style={{color: 'red'}}>Error Message</Text>
                        <Form style={{alignSelf: 'stretch'}}>
                            <Item>
                                <Label>number:</Label>
                                <Input keyboardType="numeric"/>

                            </Item>
                            <Item>
                                <Label>date:</Label>
                                <Input />

                            </Item>
                            <Item>
                                <Label>number 2:</Label>
                                <Input keyboardType="numeric"/>

                            </Item>
                            <Item>
                                <Label>date 2:</Label>
                                <Input />

                            </Item>

                            <Button success block
                            >
                                <Text>submit</Text>
                                <Icon name='person' size={20} color="#FFFFFF"/>
                            </Button>
                        </Form>
                        </Body>
                    </CardItem>
                </Card>
                <Text>This card is good because Form removed from CardItem Body.</Text>
                <Card>
                    <CardItem header style={{ backgroundColor: 'lightgray' }}>
                        <Right>
                            <Text>This is Right align text </Text>
                        </Right>
                        <Badge primary>
                            <Text>step 1</Text>
                        </Badge>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text style={{color: 'red'}}>Error Message</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Text>This card is good because it's contain extra padding for CardItem.</Text>
                <Card>
                    <CardItem header style={{ backgroundColor: 'lightgray', paddingTop: 30  }}>
                        <Right>
                            <Text>This is Right align text </Text>
                        </Right>
                        <Badge primary>
                            <Text>step 1</Text>
                        </Badge>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text style={{color: 'red'}}>Error Message</Text>
                        <Form style={{alignSelf: 'stretch'}}>
                            <Item>
                                <Label>number:</Label>
                                <Input keyboardType="numeric"/>

                            </Item>
                            <Item>
                                <Label>date:</Label>
                                <Input />

                            </Item>
                            <Item>
                                <Label>number 2:</Label>
                                <Input keyboardType="numeric"/>

                            </Item>
                            <Item>
                                <Label>date 2:</Label>
                                <Input />

                            </Item>

                            <Button success block
                            >
                                <Text>submit</Text>
                                <Icon name='person' size={20} color="#FFFFFF"/>
                            </Button>
                        </Form>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('issue669', () => issue669);
