//Задача № 1

function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args));

        let objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }
        let result = func(...args);

        cache.push({ hash: hash, value: result });

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3);
upgraded(1, 2, 3);
upgraded(2, 2, 3);
upgraded(3, 2, 3);
upgraded(4, 2, 3);
upgraded(5, 2, 3);
upgraded(6, 2, 3);
upgraded(1, 2, 3);

//Задача № 2

function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let count = 0;
    let allCount = 0;

    function wrapper(...args) {
        if (!timeoutId) {
            func(args);
            wrapper.count++;
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        wrapper.allCount++;

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            wrapper.count++;
        }, delay);
    }

    wrapper.count = count;
    wrapper.allCount = allCount;

    return wrapper;
}

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0));
setTimeout(() => upgradedSendSignal(2, 300), 300);
setTimeout(() => upgradedSendSignal(3, 900), 900);
setTimeout(() => upgradedSendSignal(4, 1200), 1200);
setTimeout(() => upgradedSendSignal(5, 2300), 2300);
setTimeout(() => upgradedSendSignal(6, 4400), 4400);
setTimeout(() => upgradedSendSignal(7, 4500), 4500);
setTimeout(() => {
    console.log(upgradedSendSignal.count);
    console.log(upgradedSendSignal.allCount);
}, 7000)