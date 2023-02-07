import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className='upper-image'>
                <img src="http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg" alt="заглушка картинка"/>
            </div>
            <div>
                <img src="https://w-dog.ru/wallpapers/14/2/405462699304734/oranzhevyj-ploshhad-cube-3d-kvadratnyj-apelsin-rendering.jpg" alt="Лого-челика"/>
                Ава + дескрипшин
            </div>
            <div>
                Посты
                <div>
                    new post
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
                <div>
                    post3
                </div>
            </div>
        </div>
    )
}

export default Profile;