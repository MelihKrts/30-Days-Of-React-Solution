# Destructuring and Spreading :tr:

## Yıkım Nedir
**Yıkım** dizileri ve nesneleri dışarı çıkarmayı ve farklı bir değişkene atamanın bir yoludur. <br>
- Diziler
- Nesneler
<br>
Yok edilebilir.

<br>

# Diziyi yok etme

### **Örnek** <br>

```javascript
const countries = ["Turkey", "Romania", "Bulgaria"];
const [tur, ron, bul] = countries; // ISO 639-2
console.log(tur, ron, bul);
```

# :information_source: Bilgi
Yukarıdaki örnekte Yıkım kullanarak dizi öğelerine eriştik. Yıkım esnasında her değişken dizideki öğeler indis değerleri ile eşleşmelidir.

<br>

### **Örnek**

```javascript
const countries = ["Turkey", "Romania", "Bulgaria"];
const [tur, ron, bul, gre] = countries;
console.log(tur, ron, bul, gre);
```

Bu örnekte dizi 3 öğeden oluşmakta. _(dizide indis sayısı 0'dan başladığı dikkat edilmeli)_ 3.değer olan gre değeri olmadığı için undefined döndürecektir. <br>

### Çıktı
```javascript
Turkey Romania Bulgaria undefined
```
<br>

### **Örnek 2**
```javascript
const medCountries = ["Spain", "France", "Italy", undefined];
const [spa, fra, ita, ara = "Egypt"] = medCountries
console.log(spa, fra, ita, ara);
```

### Çıktı
``` javascript
Spain France Italy Egypt
```
<br>

# Öğe Atlamak
Spread operatörü kullanarak öğe atlama yapılabilir. <br>

### **Örnek**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, num3, ...rest] = numbers;
console.log(num1, num2, num3, rest);
```

### Çıktı
```javascript
1 2 3 [4, 5, 6, 7, 8, 9, 10]
```
<br>

# Nesnelerde Yıkım Kullanma

```javascript
const rectangle = {
    width: 20,
    height: 10,
}
let { width, height } = rectangle;
console.log(width, height);
```

# :warning: Dikkat
Dizilerde yıkım kuralı nesne(object) içinde geçerlidir. Nesnenin anahtarı, değişken adı aynı olmalıdır.



### **Örnek**
```javascript
const rectangle = {
    width: 20,
    height: 10,
}
let { width, height, perimeter } = rectangle;
console.log(width, height, perimeter);
```
<br>

### Çıktı
```javascript
20 10
```
<br>

### Örnek 2
```javascript
const rectangle = {
    width: 20,
    height: 10,
}
let { width, height, perimeter = 200 } = rectangle;
console.log(width, height, perimeter);
```

### Çıktı
```javascript
20 10 200
```
<br>

# Değişken Adlarını Yeniden İsimlendirme

```javascript
const rectangle = {
    width: 20,
    height: 10,
}
let { width: w, height: h } = rectangle
console.log(w, h);
```
