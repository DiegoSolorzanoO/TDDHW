const Storage = require('./storage')


test('get initial size of storage which is 0', () => {
    expect(Storage.size()).toBe(0)
})

test('add one initial item', () => {
    expect(Storage.add('1', 'Hotdog')).toEqual(['1','Hotdog'])
})

test('verify that the storage size incremented', () => {
    expect(Storage.size()).toBe(1)
})

test('check if the item exists', () => {
    expect(Storage.exists('Hotdog')).toBeTruthy()
})

test('get the element of Hotdog by id', () => {
    expect(Storage.get('1')).toEqual('Hotdog')
})

test('search for Hotdog index', () => {
    expect(Storage.search('Hotdog')).toEqual('1')
})

test('clear the list first time', () => {
    Storage.clear()
    expect(Storage.size()).toBe(0)
})

test('add hamburger items', () => {
    expect(Storage.add('2', 'Hamburger2')).toEqual(['2','Hamburger2'])
    expect(Storage.add('3', 'Hamburger3')).toEqual(['3','Hamburger3'])
    expect(Storage.add('4', 'Hamburger4')).toEqual(['4','Hamburger4'])
    expect(Storage.add('5', 'Hamburger5')).toEqual(['5','Hamburger5'])
})

test('check if Hamburger4 exists', () => {
    expect(Storage.exists('Hamburger4')).toBeTruthy()
})

test('remove the Hamburger4 from the storage', () => {
    expect(Storage.remove('4')).toBeTruthy()
})

test('check if Hamburger5 exists', () => {
    expect(Storage.exists('Hamburger5')).toBeTruthy()
})

test('remove the Hamburger5 from the storage', () => {
    expect(Storage.remove('5')).toBeTruthy()
})

test('clear the list from hamburgers', () => {
    Storage.clear()
    expect(Storage.size()).toBe(0)
})

test('add donut items', () => {
    expect(Storage.add('1', 'Donut1')).toEqual(['1','Donut1'])
    expect(Storage.add('2', 'Donut2')).toEqual(['2','Donut2'])
    expect(Storage.add('3', 'Donut3')).toEqual(['3','Donut3'])
    expect(Storage.add('4', 'Donut4')).toEqual(['4','Donut4'])
    expect(Storage.add('5', 'Donut5')).toEqual(['5','Donut5'])
})

test('get Donut4 by index', () => {
    expect(Storage.get('4')).toEqual('Donut4')
})

test('search for Donut1 index', () => {
    expect(Storage.search('Donut1')).toEqual('1')
})

test('remove Donut5 from the list', () => {
    expect(Storage.remove('5')).toBeTruthy()
})

test('get Donut2 by index', () => {
    expect(Storage.get('2')).toEqual('Donut2')
})

test('search for Donut3 index', () => {
    expect(Storage.search('Donut3')).toEqual('3')
})

test('get new size of the storage', () => {
    expect(Storage.size()).toBe(4)
})

test('last clear of the storage', () => {
    Storage.clear()
    expect(Storage.size()).toBe(0)
})