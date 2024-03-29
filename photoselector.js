const photosNumber = [ 1900 ,  1914 ,  1930 ,  1935 ,  1937 ,  1938 ,  1941 ,  1962 ,  1968 ,  1970 ,  1972 ,  1974 ,  1985 ,  1986 ,  1988 ,  1989 ,  1990 ,  1991 ,  1992 ,  1993 ,  1994 ,2000, 2001, 2002, 2003, 2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

// const photosYear = [ 2000 ,  2001 ,  2002 ,  2003 ,  2004 ,  2005 ,  2007 ,  2008 ,  2009 ,  2010 ,  2011 ,  2012 ,  2013 ,  2015 ,  2016 ,  2017 ,  2018 ,  2019 ,  2020 ,  2021 ,  2022 ,  2023 ,  2024 ]

let photosNumberStr = []

let year = 0

function newRandomYear(){
    year = photosNumber[Math.floor(Math.random() * photosNumber.length)];

    

}


photosNumber.forEach(element => {
    photosNumberStr.push(element.toString());
});


console.log(photosNumberStr);


document.getElementsByClassName( counterimg )[0].style.display =  none ;